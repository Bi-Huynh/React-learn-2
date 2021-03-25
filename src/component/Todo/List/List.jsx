import React, { useContext, useEffect } from 'react';

import { TodoContext } from '../../../stores/Todo.jsx';
import TodoItem from '../Item/Item.jsx';

import './List.css';

TodoList.propTypes = {};

function TodoList(props) {
    const { todos } = useContext(TodoContext);

    let todoItems = JSON.parse(JSON.stringify(todos));

    // nên có nút sort để người dùng có thể xắp sếp
    // sắp xếp tự động thì đôi khi cũng tiện, cũng có lúc hơi khó chịu.
    // todoItems = todoItems.sort((a, b) => {
    //     return a.level - b.level;
    // });

    return (
        <div className="todo-list">
            {todoItems.map((todoItem) => {
                return <TodoItem key={todoItem.id} item={todoItem}></TodoItem>;
            })}
        </div>
    );
}

export default TodoList;
