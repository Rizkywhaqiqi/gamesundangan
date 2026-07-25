import { useState, useEffect } from "react";

export function useInstagramBrowser() {
  const [isInstagramBrowser, setIsInstagramBrowser] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const userAgent = navigator.userAgent || navigator.vendor || "";
    
    // Detect Instagram in-app browser
    const isInstagram = /Instagram/i.test(userAgent);
    
    setIsInstagramBrowser(isInstagram);
  }, []);

  return {
    isInstagramBrowser: isClient ? isInstagramBrowser : false,
    isClient,
  };
}