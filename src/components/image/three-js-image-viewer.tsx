'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Loader2 } from 'lucide-react';

interface ThreeJsImageViewerProps {
  imageUrl: string;
}

const ThreeJsImageViewer: React.FC<ThreeJsImageViewerProps> = ({ imageUrl }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoadingTexture, setIsLoadingTexture] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!mountRef.current || !imageUrl) return;
    setIsLoadingTexture(true);
    setError(null);

    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1A202C); // Match app background

    // Camera
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 0.7, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      imageUrl,
      (texture) => {
        setIsLoadingTexture(false);
        // Image Plane
        const aspectRatio = texture.image.width / texture.image.height;
        const planeHeight = 5; 
        const planeWidth = planeHeight * aspectRatio;
        
        const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
        const material = new THREE.MeshStandardMaterial({ 
            map: texture, 
            side: THREE.DoubleSide,
            metalness: 0.1,
            roughness: 0.7,
        });
        const plane = new THREE.Mesh(geometry, material);
        scene.add(plane);

        // Adjust camera to fit image initially
        const distance = planeHeight / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2));
        camera.position.z = distance * 1.2; // Add some padding
        camera.lookAt(plane.position);


        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;
        controls.minDistance = 1;
        controls.maxDistance = 20;
        controls.target.set(0,0,0); // Ensure target is at the plane's center

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined, // onProgress callback (not used)
      (err) => {
        console.error('Error loading texture:', err);
        setError('Failed to load image texture. The URL might be invalid or inaccessible.');
        setIsLoadingTexture(false);
      }
    );
    

    // Handle resize
    const handleResize = () => {
      if (currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
         // eslint-disable-next-line react-hooks/exhaustive-deps
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      // Dispose scene objects if necessary
      scene.traverse(object => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
             if (Array.isArray(object.material)) {
                object.material.forEach(mat => {
                    if (mat.map) mat.map.dispose();
                    mat.dispose();
                });
             } else {
                if (object.material.map) object.material.map.dispose();
                object.material.dispose();
             }
          }
        }
      });
    };
  }, [imageUrl]);

  return (
    <div
      ref={mountRef}
      className="w-full h-[400px] md:h-[600px] bg-card rounded-lg overflow-hidden relative border border-border shadow-inner"
      aria-label="Interactive 3D image viewer"
    >
      {isLoadingTexture && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 z-10">
          <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
          <p className="text-foreground/80">Loading 3D view...</p>
        </div>
      )}
      {error && !isLoadingTexture && (
         <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 z-10 p-4">
          <p className="text-destructive text-center">{error}</p>
        </div>
      )}
    </div>
  );
};

export default ThreeJsImageViewer;
