import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import styled from "styled-components";

import { removeTodo, toggleTodo } from "../actions/todo.actions";
import { showModal } from "../actions/modal.actions";
import { CONFIRM_MODAL } from "../constants";

const Item = ({ id, text, isFav, onDeleteTodo, onToggleTodo }) => (
    <li>
        <label htmlFor={id + text}>
            <input
                type="checkbox"
                checked={isFav}
                name={id + text}
                id={id + text}
                onChange={() => onToggleTodo(id)}
            />
            {text}
        </label>
        <DeleteMark onClick={() => onDeleteTodo(id)}>X</DeleteMark>
    </li>
);

const DeleteMark = styled.span`
    color: red;
    float: right;
    cursor: pointer;
`;

Item.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isFav: PropTypes.bool.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        onToggleTodo: id => {
            const message = "Do you want to make this one favorite?";
            const onSubmit = () => dispatch(toggleTodo(id));
            dispatch(showModal(CONFIRM_MODAL, { message, onSubmit }));
        },
        onDeleteTodo: id => {
            const message = `Do you really want to delete todo with id ${id}?`;
            const onSubmit = () => dispatch(removeTodo(id));
            dispatch(showModal(CONFIRM_MODAL, { message, onSubmit }));
        }
    };
}

export default connect(
    null,
    mapDispatchToProps
)(Item);
