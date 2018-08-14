import React from "react";
import ReactDOM from "react-dom";

const PortalRoot = document.getElementById("portal");

class Portal extends React.Component {
    constructor() {
        super();
        this.el = document.createElement("div");
    }

    componentDidMount() {
        PortalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        PortalRoot.removeChild(this.el);
    }

    render() {
        const { children } = this.props; // eslint-disable-line react/prop-types
        return ReactDOM.createPortal(children, this.el);
    }
}

export default Portal;
