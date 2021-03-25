import React, { useContext } from 'react';
import { HomeContext } from '../../stores/Home';
import TodoProvider from '../../stores/Todo';
import Button from '../UI/Button/Button.jsx';
import TodoList from './List/List';
import './Todo.css';
import IconFilter from '../../image/icon/funnel.svg';

Todo.propTypes = {};

function Todo(props) {
    const {
        ActiveTodo: { activeTodo },
    } = useContext(HomeContext);

    let active = activeTodo ? 'active' : '';

    return (
        <TodoProvider>
            <div className={`todo ${active}`}>
                <div className="todo-input">
                    <input
                        type="text"
                        placeholder="Fill into the content todo"
                    ></input>
                    <img
                        className="todo-icon"
                        src={IconFilter}
                        alt="icon filter"
                    />
                </div>
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
