import { useEffect, useCallback, useRef } from "react";

const useIsMounted = (): () => boolean => {
  const isMountedRef = useRef(false);
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  console.log('isMounted', isMountedRef);

  return useCallback(() => isMountedRef.current, []);

};

export default useIsMounted;  
  /*
  In the above code, we have created a custom hook  useIsMounted  which returns a function that returns a boolean value indicating whether the component is mounted or not. 
  We have used  useRef  to store the mounted state of the component. 
  We have used  useEffect  to set the  isMountedRef  to  true  when the component is mounted and set it to  false  when the component is unmounted. 
  We have used  useCallback  to return a memoized version of the function. 
  Now, we can use this custom hook in our component to check if the component is mounted or not.
  */
 
