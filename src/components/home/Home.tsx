import React, { useState, useLayoutEffect, useEffect } from 'react';
// import CustomInput from '../input/CustomInput';
// import PaginationComponent from "../common/pagination";

interface Props {
    // Define the props for your component here
}

const Home: React.FC<Props> = () => {
    const [time, setTime] = useState(0);
    const onClick = () => {
        setTime(time => time + 1);;
    };

    useEffect(() => {
        const handlerBeforeUnload = (event: BeforeUnloadEvent) => {
            event.preventDefault();
            return;
        };
        addEventListener('beforeunload', handlerBeforeUnload);

        return () => {
            removeEventListener('beforeunload', handlerBeforeUnload);
        };
    });
    
    console.log('render1', time);
    useLayoutEffect(() => {
        const element = document.getElementById('myElement');
        const height = element?.getBoundingClientRect().height || 0;
        element.style.height = `${height}px`;
        console.log('useLayoutEffect', height);
      }, [time]);
      console.log('render2', time);
    useEffect(() => {
        console.log('useEffect', time);
        return () => {
            console.log('cleanup', time);
        }
    }, [time]);
    return (
        <div id="myElement">
            {/* <CustomInput /> */}
            {/* <PaginationComponent /> */}
            <h1>{time}</h1>
            <button onClick={onClick}>Click Me</button>
        </div>
    );
};

export default Home;