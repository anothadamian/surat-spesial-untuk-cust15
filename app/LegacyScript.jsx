'use client';

import { useEffect } from 'react';

export default function LegacyScript() {
  useEffect(() => {
    if (window.__blueBirthdayLegacyState) return;

    window.__blueBirthdayLegacyState = 'loading';
    const script = document.createElement('script');
    script.src = '/legacy.js?v=ayyaww-2';
    script.async = true;
    script.dataset.blueBirthdayLegacy = 'true';
    script.onload = () => {
      window.__blueBirthdayLegacyState = 'loaded';
    };
    script.onerror = () => {
      delete window.__blueBirthdayLegacyState;
    };
    document.body.appendChild(script);
  }, []);

  return <span data-legacy-loader hidden aria-hidden="true" />;
}
