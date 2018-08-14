import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { addTodo } from "../actions/todo.actions";

class Input extends React.Component {
    state = {
        text: ""
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();

        const { addTodo } = this.props;
        const { text } = this.state;

        addTodo(text);
        this.setState({ text: "" });
    };

    render() {
        const { text } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" value={text} name="text" onChange={this.onChange} />
            </form>
        );
    }
}

Input.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default connect(
    null,
    { addTodo }
)(Input);
