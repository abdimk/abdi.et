'use client';

import { useEffect, useState } from 'react';

const Footer = () => {
  const [updateDate, setUpdateDate] = useState('…');

  useEffect(() => {
    // Try env var injected at build time first (works on Vercel where git.date is null)
    const buildTime = process.env.NEXT_PUBLIC_DEPLOY_TIME;
    if (buildTime) {
      const d = new Date(buildTime);
      setUpdateDate(
        d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
      );
      return;
    }

    // Fallback: fetch from heartbeat (works locally where git CLI is available)
    fetch('/v1/status/heartbeat')
      .then((r) => r.json())
      .then((data) => {
        const raw = data?.git?.date;
        if (raw) {
          const d = new Date(raw);
          setUpdateDate(
            d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
          );
        } else {
          setUpdateDate('N/A');
        }
      })
      .catch(() => setUpdateDate('N/A'));
  }, []);

  return (
    <footer className="mt-8 pt-8 border-t border-border-color text-sm text-center text-text-color flex flex-col sm:flex-row justify-between items-center">
      <p className="text-base mb-2 sm:mb-0 ml-0 sm:ml-8">Made with ❤️ 2025 by Abdisa</p>
      <p className="border border-gray-400 py-1 px-2 -mt-1 bg-gray-300 mr-0 sm:mr-8">
        Updated: {updateDate}
      </p>
    </footer>
  );
};

export default Footer;