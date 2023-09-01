import { Link, Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunction from "./Profile"
import React, { useEffect } from "react";
const About = () => {
    useEffect(() => {
        return () => {
            console.log("About component is unmounted..");
        }
    }, [])
    return (
        <>
            <h1>About componrnt...</h1>
            <hr />
            <h1>Functional Component</h1>
            <ProfileFunction name="abhinav goyal" />
            <hr />
            <h1>Class Component</h1>
            <Profile name="abhinav goyal" />
        </>
    )
}

// class About extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log("parent constructor");
//     }

//     componentDidMount() {
//         console.log("parent component did mount..");
//     }

//     render() {
//         console.log("parent render");
//         return (
//             <>
//                 <h1>About component...</h1>
//                 <hr />
//                 {/* <h1>Functional Component</h1>
//                 <ProfileFunction name="abhinav goyal" />
//                 <hr /> */}
//                 <h1>Class Component</h1>
//                 <Profile name="abhinav goyal" />
//             </>
//         )
//     }

// }
export default About;