import { useState, useCallback } from "react";

const useToggle = (initialVlaue: boolean): [boolean, () => void] => {
   const [value, setVale] = useState<boolean>(initialVlaue);
   const toggle = useCallback(() => {
        setVale((value) => !value);
   }, []);
   return [value, toggle];
};

export default useToggle;

