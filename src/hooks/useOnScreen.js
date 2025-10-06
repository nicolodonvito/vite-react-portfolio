import { useState, useEffect, useRef } from 'react';

export default function useOnScreen({ appearThreshold = 0, disappearThreshold = 0 }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current; // Capture ref.current
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio >= appearThreshold) {
        setIsVisible(true);
      } else if (entry.intersectionRatio <= disappearThreshold) {
        setIsVisible(false);
      }
    }, { threshold: [disappearThreshold, appearThreshold] });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, appearThreshold, disappearThreshold]);

  return [ref, isVisible];
}