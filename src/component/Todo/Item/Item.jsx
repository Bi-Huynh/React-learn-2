import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import IconComplete from '../../../image/icon/check-complete.svg';
import IconUncomplete from '../../../image/icon/check.svg';
import RemoveUncomplete from '../../../image/icon/remove-2.svg';
import RemoveComplete from '../../../image/icon/remove.svg';
import { TodoContext } from '../../../stores/Todo.jsx';
import {
    deletedId as deleteIdTodo,
    update as updateTodo,
} from '../../../api/todoApi';
import './Item.css';

TodoItem.propTypes = {
    item: PropTypes.object,
};

TodoItem.defaultProps = {
    item: {
        id: new Date().getTime(),
        content: 'No Content',
        complete: false,
        level: 5,
    },
};

function TodoItem({ item }) {
    const { getTodos } = useContext(TodoContext);

    let srcIconCheck = item.complete ? IconComplete : IconUncomplete;
    let srcIconRemove = item.complete ? RemoveComplete : RemoveUncomplete;

    let todoLevel = '';
    // sẽ có 4 mức độ công việc, mức 5 công việc đã hoàn thành.
    switch (item.level) {
        case 1:
            todoLevel = 'level-1';
            // level 1 todo item cần làm gấp
            break;
        case 2:
            todoLevel = 'level-2';
            break;
        case 3:
            todoLevel = 'level-3';
            break;
        case 4:
            todoLevel = 'level-4';
            break;
        default:
            todoLevel = 'completed';
            // level 5 là todo item đã completed
            break;
    }

    const handleCheckComplete = async () => {
        // dispatch({ type: ACTION_TODO.TODO_COMPLETED, id: item.id });
        let level = 4;
        if (!item.complete) {
            level = 5;
        }
        const data = {
            query: { _id: item._id },
            data: { complete: !item.complete, level },
        };
        let response = await updateTodo(data);
        if (response) {
            getTodos();
        }
    };

    const handleCheckLevel = async () => {
        // dispatch({ type: ACTION_TODO.TODO_LEVEL, id: item.id });
        item.level = item.level === 4 ? 1 : ++item.level;
        let level = item.level;
        const data = {
            query: { _id: item._id },
            data: { level, complete: false },
        };
        let response = await updateTodo(data);
        if (response) {
            getTodos();
        }

        console.log(data);
    };

    const handleDeleteTodo = async () => {
        // dispatch({ type: ACTION_TODO.TODO_DELETED, id: item.id });
        let response = await deleteIdTodo(item._id);
        if (response) {
            getTodos();
        }
    };

    return (
        <div
            className={`item ${todoLevel} ${item.complete ? 'completed' : ''}`}
        >
            <img
                className="icon check"
                src={srcIconCheck}
                alt="completed"
                onClick={handleCheckComplete}
            />
            <div className="todo-content">{item.content}</div>
            <div className={`icon ${todoLevel}`} onClick={handleCheckLevel}>
                {item.level === 5 ? '' : item.level}
            </div>
            <img
                className="icon delete"
                src={srcIconRemove}
                alt="deleted"
                onClick={handleDeleteTodo}
            />
        </div>
    );
}

export default TodoItem;
