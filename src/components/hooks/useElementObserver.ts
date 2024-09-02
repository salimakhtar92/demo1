import {useState, useEffect, useRef } from "react";

interface ElementObserverProps {
    root: Element | null;
    rootMargin: string;
    threshold: number;
};

const useElementObserver = (option: ElementObserverProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(callBackHandler, option);
    if(elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [elementRef, option]);

  const callBackHandler = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  return [elementRef, isVisible];
};

export default useElementObserver;