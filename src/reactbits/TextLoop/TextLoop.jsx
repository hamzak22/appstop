import { useEffect, useRef, useState, memo, useCallback, useMemo } from 'react';

const TextLoop = memo(({
  items = [],
  speed = 80,
  direction = 'left',
  separator = '•',
  textClassName = '',
  separatorClassName = '',
  className = '',
  pauseOnHover = false,
}) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const seqRef = useRef(null);
  
  const [seqWidth, setSeqWidth] = useState(0);
  const [copyCount, setCopyCount] = useState(2);
  const [isHovered, setIsHovered] = useState(false);

  const targetVelocity = useMemo(() => {
    const magnitude = Math.abs(speed);
    const directionMultiplier = direction === 'left' ? 1 : -1;
    return magnitude * directionMultiplier;
  }, [speed, direction]);

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const sequenceWidth = seqRef.current?.getBoundingClientRect()?.width ?? 0;
    
    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth));
      const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + 3;
      setCopyCount(Math.max(2, copiesNeeded));
    }
  }, []);

  useEffect(() => {
    if (!window.ResizeObserver) {
      window.addEventListener('resize', updateDimensions);
      updateDimensions();
      return () => window.removeEventListener('resize', updateDimensions);
    }

    const observer = new ResizeObserver(updateDimensions);
    if (containerRef.current) observer.observe(containerRef.current);
    if (seqRef.current) observer.observe(seqRef.current);
    updateDimensions();
    
    return () => observer.disconnect();
  }, [updateDimensions, items]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || seqWidth === 0) return;

    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      track.style.transform = 'translate3d(0, 0, 0)';
      return;
    }

    let rafId = null;
    let lastTimestamp = null;
    let offset = 0;
    let velocity = 0;

    const animate = (timestamp) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      
      const deltaTime = Math.max(0, timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      const target = isHovered && pauseOnHover ? 0 : targetVelocity;
      const easingFactor = 1 - Math.exp(-deltaTime / 0.25);
      velocity += (target - velocity) * easingFactor;

      offset += velocity * deltaTime;
      offset = ((offset % seqWidth) + seqWidth) % seqWidth;
      
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [seqWidth, targetVelocity, isHovered, pauseOnHover]);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const renderSequence = (index) => (
    <div
      key={index}
      ref={index === 0 ? seqRef : undefined}
      className="flex items-center shrink-0"
      aria-hidden={index > 0}
    >
      {items.map((item, itemIndex) => (
        <div key={itemIndex} className="flex items-center">
          <span className={`whitespace-nowrap px-4 ${textClassName}`}>
            {item}
          </span>
          <span className={`${separatorClassName}`} aria-hidden>
            {separator}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden w-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={trackRef}
        className="flex will-change-transform select-none"
        style={{ width: 'max-content' }}
      >
        {Array.from({ length: copyCount }, (_, i) => renderSequence(i))}
      </div>
    </div>
  );
});

TextLoop.displayName = 'TextLoop';

export default TextLoop;
