import React, { useContext } from 'react';
import { HomeContext } from '../../stores/Home';
import TodoProvider from '../../stores/Todo';
import Button from '../UI/Button/Button.jsx';
import TodoList from './List/List';
import TodoHeader from './Header.jsx';
import './Todo.css';

Todo.propTypes = {};

function Todo(props) {
    const {
        ActiveTodo: { activeTodo },
    } = useContext(HomeContext);

    let active = activeTodo ? 'active' : '';

    return (
        <TodoProvider>
            <div className={`todo ${active}`}>
                <TodoHeader></TodoHeader>
                <TodoList></TodoList>
                <div className="todo-list"></div>
                <div className="todo-footer">
                    <Button value={{ index: 1, content: 'Clear All' }}></Button>
                    <Button
                        value={{ index: 0, content: 'Clearn Completed All' }}
                    ></Button>
                </div>
            </div>
        </TodoProvider>
    );
}

export default Todo;
