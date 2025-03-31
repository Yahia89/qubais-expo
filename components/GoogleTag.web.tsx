import React from 'react';
import { Platform } from 'react-native';

export function GoogleTag() {
  React.useEffect(() => {
    if (Platform.OS === 'web') {
      // Add Google Tag Manager script
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = "https://www.googletagmanager.com/gtag/js?id=AW-16938958917";
      
      // Add Google Tag configuration script
      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-16938958917');
      `;
      
      // Append scripts to document head
      document.head.appendChild(script1);
      document.head.appendChild(script2);
    }
  }, []);

  return null;
}