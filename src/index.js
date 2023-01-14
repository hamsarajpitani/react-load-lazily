import React, { useEffect, useRef, useState } from 'react'

const LazyLoad = ({
  threshold = 0.5,
  height,
  width,
  style,
  onVisible,
  component,
  children,
  ...props
}) => {
  const [load, setLoad] = useState(false)
  const ref = useRef()

  const styleProps = {
    ...((height || width || style) && { style: { height, width, ...style } })
  }

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          // eslint-disable-next-line no-unused-expressions
          onVisible?.()
          setLoad(true)
        }
      },
      { threshold }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [threshold])

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div {...styleProps} {...props} ref={ref}>
      {load ? component || children : null}
    </div>
  )
}
export default LazyLoad
