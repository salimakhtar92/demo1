import {FC, useEffect, useRef } from "react";
interface IntersectionLazyLoadProps {
  src: string;
  alt: string;
  imgHeight: number;
};

const IntersectionLazyLoad: FC<IntersectionLazyLoadProps> = ({src, alt, imgHeight}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const option = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  };

  useEffect(() => {

    const observer = new IntersectionObserver(handleIntersection, option);

    if(imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();

  }, []);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {

    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        (imgRef.current as HTMLImageElement).src = src;
        (imgRef.current as HTMLImageElement).alt = alt;
      }
    });
  }

  return <img ref={imgRef} src = {src} alt={alt} height={imgHeight} />;
};

export default IntersectionLazyLoad;