import React, { Component } from "react";
import { Button }           from "components";

class About extends Component {
    render() {
        return (
            <div className="container about">
                <h1>About Page</h1>
                <Button link="/login">Go to login page</Button>
            </div>
        );
    }
}

export default About;
