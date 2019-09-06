import React, { Component } from "react";
import { Button }           from "components";

class Login extends Component {
    render() {
        return (
            <div className="container login">
                <h1>Login Page</h1>
                <Button link="/about">Go to about page</Button>
            </div>
        );
    }
}

export default Login;
