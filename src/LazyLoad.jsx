import React, { useEffect, useRef, useState } from 'react';
const LazyLoad = ({
  threshold = 0.5,
  height,
  width,
  style,
  onVisiblie,
  component,
  children,
  ...props
}) => {
  const [load, setLoad] = useState(false);
  const ref = useRef();

  const styleProps = {
    ...((height || width || style) && { style: { height, width, ...style } }),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          onVisiblie?.();
          setLoad(true);
        }
      },
      { threshold },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [onVisiblie, threshold]);
  return (
    <div {...styleProps} {...props} ref={ref}>
      {load ? component || children : null}
    </div>
  );
};
export default LazyLoad;
