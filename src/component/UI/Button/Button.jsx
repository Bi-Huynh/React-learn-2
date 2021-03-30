import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './Button.css';
import { TodoContext } from '../../../stores/Todo';
import { deleteData as deleteTodoData } from '../../../api/todoApi';

Button.propTypes = {
    value: PropTypes.object,
};

Button.defaultProps = {
    value: {
        index: 0,
        content: '',
    },
};

function Button({ value: { index, content } }) {
    const { getTodos } = useContext(TodoContext);

    const handleDeletedCompleted = async () => {
        let response = await deleteTodoData({ complete: true });
        if (response) {
            getTodos();
        }
    };

    const handleDeletedAll = async () => {
        let response = await deleteTodoData({});
        if (response) {
            getTodos();
        }
    };

    const handleClick = (event) => {
        // event.target.dataset.index === '1'
        //     ? dispatch({ type: ACTION_TODO.TODO_DELETED_ALL })
        //     : dispatch({ type: ACTION_TODO.TODO_DELETED_COMPLETED });
        event.target.dataset.index === '1'
            ? handleDeletedAll()
            : handleDeletedCompleted();
    };

    return (
        <div className="button" data-index={index} onClick={handleClick}>
            {content}
        </div>
    );
}

export default Button;
