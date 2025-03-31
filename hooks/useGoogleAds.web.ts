import { Platform } from 'react-native';

export function useGoogleAds() {
  const trackPageView = () => {
    if (Platform.OS === 'web' && window.gtag) {
      window.gtag('event', 'page_view', {
        'send_to': 'AW-16938958917'
      });
    }
  };

  const trackConversion = () => {
    if (Platform.OS === 'web' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16938958917/Df0UCOiUp7IaEMWAkI0_'
      });
    }
  };

  return { trackPageView, trackConversion };
}