import React, { useCallback } from "react";
import debounce from "../../utils/debounce";
import throttle from "../../utils/throttle";
import usePrevious from "../hooks/usePrevious";
import useToggle from "../hooks/useToggle";
import useFetch from "../hooks/useFetch";
import useIsMounted from "../hooks/useIsMounted";
// import apiThrottle from "../../utils/apiThrottle";

const CustomInput: React.FC = () => {
    const [name, setName] = React.useState<string>("");
    const isMounted = useIsMounted();
    console.log({ val: isMounted() });
    const prevoius = usePrevious(name);
    const [on, toggle] = useToggle(false);
    const { data, loading, fetchData } = useFetch("https://jsonplaceholder.typicode.com/posts");
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleSubmit = () => {
      name && console.log(name);
      console.log({ val: isMounted() });
    }

    const fetchDataHandler = () => {
        fetchData();
    };

    return (
        <div>
            <div>{prevoius}</div>
            <h1>Custom Input</h1>
            <input onChange={debounce(handleChange, 100)} type="text" placeholder="Enter your name" />
            <button onClick={throttle(handleSubmit, 1000)}>Submit</button>
            <br />
            <button onClick={() => toggle()}>{on ? "ON" : "OFF"}</button>
            <br />
            <button onClick={useCallback(throttle(fetchDataHandler, 1000), [])}>Fetch Data{loading && "..."}</button>
            
            <br />
            <br />
            {data?.map((item: any, index: number) => (
                <div key={index}>{item.title}</div>
            ))}
        </div>
    );
};

export default CustomInput;
