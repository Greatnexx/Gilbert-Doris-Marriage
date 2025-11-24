import { useEffect, useRef } from 'react';

// Performance monitoring hook
export const usePerformanceMonitor = (componentName) => {
  const startTimeRef = useRef(performance.now());

  useEffect(() => {
    const endTime = performance.now();
    const loadTime = endTime - startTimeRef.current;
    
    if (import.meta.env?.DEV) {
      console.log(`${componentName} loaded in ${loadTime.toFixed(2)}ms`);
    }
  }, [componentName]);

  return {
    markStart: () => {
      startTimeRef.current = performance.now();
    },
    markEnd: (label) => {
      const endTime = performance.now();
      const duration = endTime - startTimeRef.current;
      if (import.meta.env?.DEV) {
        console.log(`${label}: ${duration.toFixed(2)}ms`);
      }
      return duration;
    }
  };
};

// Image loading performance hook
export const useImageLoadingStats = () => {
  const stats = useRef({
    totalImages: 0,
    loadedImages: 0,
    failedImages: 0,
    averageLoadTime: 0,
    loadTimes: []
  });

  const trackImageLoad = (loadTime) => {
    stats.current.loadedImages++;
    stats.current.loadTimes.push(loadTime);
    stats.current.averageLoadTime = 
      stats.current.loadTimes.reduce((a, b) => a + b, 0) / stats.current.loadTimes.length;
  };

  const trackImageError = () => {
    stats.current.failedImages++;
  };

  const incrementTotal = () => {
    stats.current.totalImages++;
  };

  return {
    stats: stats.current,
    trackImageLoad,
    trackImageError,
    incrementTotal
  };
};