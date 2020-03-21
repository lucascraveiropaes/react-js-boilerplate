import React, { Component }  from "react";
import {
    Container,
    Button,
    Title,
} from "components";

class About extends Component {
    render() {
        return (
            <Container background="#21391e">
                <Title>About Page</Title>
                <Button link="/login">Go to login page</Button>
            </Container>
        );
    }
}

export default About;
