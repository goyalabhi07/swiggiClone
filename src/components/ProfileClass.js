import React from "react";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 3,
            count2: 0,
            userInfo: {
                name: "dummy name",
                location: "dummy location"
            }
        }
    }

    async componentDidMount() {
        console.log("child did mount");
        const res = await fetch("https://api.github.com/users/abhinav07");
        const user = await res.json();
        this.setState({
            userInfo: user
        })
    }

    render() {
        return (
            <>
                <div>Name : {this.state.userInfo.name}</div>
                <div>Location : {this.state.userInfo.location}</div>
            </>
        )
    }
}

export default Profile;