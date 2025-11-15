import { useState, useEffect, useMemo } from 'react';

// Virtual scrolling hook for large galleries
export const useVirtualization = (items, itemHeight = 300, containerHeight = 600) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [containerRef, setContainerRef] = useState(null);

  const visibleItems = useMemo(() => {
    if (!items.length) return [];

    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight) + 1,
      items.length
    );

    return items.slice(Math.max(0, startIndex - 1), endIndex + 1).map((item, index) => ({
      ...item,
      index: startIndex + index - 1,
      top: (startIndex + index - 1) * itemHeight,
    }));
  }, [items, scrollTop, itemHeight, containerHeight]);

  const totalHeight = items.length * itemHeight;

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  return {
    visibleItems,
    totalHeight,
    handleScroll,
    containerRef: setContainerRef,
  };
};

// Lazy loading hook with intersection observer
export const useLazyLoading = (threshold = 0.1) => {
  const [loadedItems, setLoadedItems] = useState(new Set());

  const observeElement = (element, index) => {
    if (!element || loadedItems.has(index)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadedItems(prev => new Set([...prev, index]));
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '100px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  };

  return { loadedItems, observeElement };
};