import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './Todo.css';
import IconFilter from '../../image/icon/funnel.svg';
import Button from '../UI/Button/Button.jsx';
import { HomeContext } from '../../stores/Home';
import TodoProvider from '../../stores/Todo';
import Todo from './List';

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

                <div className="todo-list"></div>
                <div className="todo-footer">
                    <Button>{'Clear All'}</Button>
                    <Button>{'Clearn Completed All'}</Button>
                </div>
            </div>
        </TodoProvider>
    );
}

export default Todo;
