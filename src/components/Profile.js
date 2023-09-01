import { useState } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1> Profile Functional Component </h1>
            <div>Name : {props.name}</div>
            <div>{count}</div>
            <button onClick={() => setCount(10)}>Click me to make count 10</button>
        </>
    )
}

export default Profile