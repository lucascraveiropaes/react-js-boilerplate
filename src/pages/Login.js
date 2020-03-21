import React, { Component }  from "react";
import {
    Container,
    Button,
    Title,
} from "components";

class Login extends Component {
    render() {
        return (
            <Container background="#333">
                <Title>Login Page</Title>
                <Button link="/about">Go to about page</Button>
            </Container>
        );
    }
}

export default Login;
