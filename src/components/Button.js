import React, { Component } from "react";
import { Link }             from "react-router-dom";

class Button extends Component {
    render() {
        const { link, children } = this.props;

        return (
            <Link to={ link } className="button">{ children }</Link>
        )
    }
}

export default Button;
