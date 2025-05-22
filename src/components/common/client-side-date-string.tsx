
'use client';

import { useState, useEffect } from 'react';

export function ClientSideDateString() {
  // Initialize with null or a placeholder to ensure `new Date()` is only called client-side.
  const [dateString, setDateString] = useState<string | null>(null);

  useEffect(() => {
    // This will only run on the client, after initial hydration
    setDateString(new Date().toLocaleDateString());
  }, []); // Empty dependency array ensures this runs once on mount

  // Render placeholder on server and initial client render
  if (dateString === null) {
    // Using a non-breaking space or a specific placeholder to avoid layout shifts
    // or to indicate loading if preferred.
    return <> </>; // Return a non-breaking space or an empty fragment to avoid empty string issues in some contexts
  }

  return <>{dateString}</>;
}
