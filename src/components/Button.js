import React, { Component } from "react";
import { Link }             from "react-router-dom";
import styled               from "styled-components";

class Button extends Component {
    render() {
        const { link, onPress, children, ...otherProps } = this.props;

        if (onPress)
            return <ButtonDefault onPress={ onPress } { ...otherProps }>{ children }</ButtonDefault>

        return (
            <ButtonLink to={ link } { ...otherProps }>{ children }</ButtonLink>
        )
    }
}

export default Button;

const ButtonStyle = `
    background: #5938ea;
    padding: 15px 25px;
    border-radius: 6px;
    text-decoration: none;
    color: #FFF;
    text-transform: uppercase;
    font-family: sans-serif;
    margin: 20px 0px;
`;

const ButtonLink = styled(Link)`
    ${ButtonStyle}
`;

const ButtonDefault = styled.button`
    ${ButtonStyle}
`;
