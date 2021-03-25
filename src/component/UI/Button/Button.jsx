import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './Button.css';
import { ACTION_TODO, TodoContext } from '../../../stores/Todo';

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
    const { dispatch } = useContext(TodoContext);

    const handleClick = (event) => {
        // console.log(event.target.dataset.index == true);
        event.target.dataset.index == true
            ? dispatch({ type: ACTION_TODO.TODO_DELETED_ALL })
            : dispatch({ type: ACTION_TODO.TODO_DELETED_COMPLETED });
    };

    return (
        <div className="button" data-index={index} onClick={handleClick}>
            {content}
        </div>
    );
}

export default Button;
