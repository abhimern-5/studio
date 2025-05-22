'use client';

import { useState, useEffect } from 'react';

export function CurrentYear() {
  // Use a placeholder or the current year as a string for initial render
  // to avoid layout shift and ensure a value is present server-side.
  const [year, setYear] = useState<number | string>(() => new Date().getFullYear().toString());

  useEffect(() => {
    // Ensure the year is set on the client side after hydration.
    // This also handles cases where the component might be mounted later or re-mounted.
    setYear(new Date().getFullYear());
  }, []); // Empty dependency array ensures this runs once on client mount.

  return <>{year}</>;
}
