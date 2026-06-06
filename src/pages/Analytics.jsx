import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const gaTrackingId = import.meta.env.VITE_GA_TRACKING_ID;
    if (gaTrackingId && !window.gaInitialized) {
      ReactGA.initialize(gaTrackingId);
      window.gaInitialized = true;
    }
    if (window.gaInitialized) {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }
  }, [location]);

  return null;
}