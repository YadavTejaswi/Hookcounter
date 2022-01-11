import React, { useEffect, useState } from 'react'

export default function Counter() {
    let [counter, setCounter] = useState(0);

    useEffect(() => {
        const i = setInterval(() => {
            setCounter(counter + 1);
        }, 1000);
        if (counter >= 20) {
            counter = -1;
        }
        return () => {
            clearInterval(i);
        };
    });


    return (

        <div className='container'>
            <h1 className='text-center text-info'>Counter</h1>
            <h2>{counter}</h2>
        </div>
    )
}
