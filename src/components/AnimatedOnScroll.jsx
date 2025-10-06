import useOnScreen from '../hooks/useOnScreen';


const AnimatedOnScroll = ({ children, appearThreshold = 0.04, disappearThreshold = 0 }) => {
  const [ref, isVisible] = useOnScreen({ appearThreshold, disappearThreshold });

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