import { useRef } from "react";

export const useThrottle = (func: Function, delay: number) => {
  const time = useRef(0);
  return function(...args: any[]){
    const now = Date.now();
    if(now - time.current > delay){
      func(...args);
      time.current = now;
    }
  }
};