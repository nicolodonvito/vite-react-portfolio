import { useState, useEffect, useRef } from 'react';

export default function useOnScreen({ appearThreshold = 0, disappearThreshold = 0 }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio >= appearThreshold) {
        setIsVisible(true);
      } else if (entry.intersectionRatio <= disappearThreshold) {
        setIsVisible(false);
      }
    }, { threshold: [disappearThreshold, appearThreshold] });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, appearThreshold, disappearThreshold]);

  return [ref, isVisible];
}