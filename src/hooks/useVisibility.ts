import { useState, useEffect, useRef } from 'react';

export const useVisibility = (offset = 0) => {
     const [isVisible, setIsVisible] = useState(false);
     const elementRef = useRef<HTMLDivElement | null>(null);

     useEffect(() => {
          const observer = new IntersectionObserver(
               ([entry]) => setIsVisible(entry.isIntersecting),
               { rootMargin: `${offset}px` }
          );

          if (elementRef.current) {
               observer.observe(elementRef.current);
          }

          return () => {
               if (elementRef.current) {
                    observer.unobserve(elementRef.current);
               }
          };
     }, [offset]);

     return { isVisible, elementRef };
};
