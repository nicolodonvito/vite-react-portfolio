import React from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import './AnimatedOnScroll.css'; // We will create this file next

const AnimatedOnScroll = ({ children, threshold = 0.5 }) => {
  const [ref, isVisible] = useOnScreen({ threshold });

  return (
    <div
      ref={ref}
      className={`animated-on-scroll ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default AnimatedOnScroll;