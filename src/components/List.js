import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import Item from "./Item";

const List = ({ todos }) => <ul>{todos.map(todo => <Item key={todo.id} {...todo} />)}</ul>;

List.defaultProps = {
    todos: []
};

List.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            isFav: PropTypes.bool.isRequired
        })
    )
};

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(List);
