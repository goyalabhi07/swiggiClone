import { useState } from "react";

const Demo = () => {
    console.log("Hii");
    const [count, setCount] = useState(5);
    const [count2, setCount2] = useState(5);
    return (
        <>
            <div>{count}</div>
            <div>{count2}</div>
            <button onClick={() => { setCount(10) }}>Click me</button>
            <button onClick={() => { setCount2(10) }}>Click me</button>
        </>
    )
}

export default Demo;