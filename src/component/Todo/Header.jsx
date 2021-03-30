import React, { useContext, useEffect, useRef, useState } from 'react';
import { TodoContext } from '../../stores/Todo';
import { created as todoCreated } from '../../api/todoApi';

import IconFilter from '../../image/icon/funnel.svg';
import IconFilterL1 from '../../image/icon/filter-level-1.svg';
import IconFilterL2 from '../../image/icon/filter-level-2.svg';
import IconFilterL3 from '../../image/icon/filter-level-3.svg';
import IconFilterL4 from '../../image/icon/filter-level-4.svg';
import IconFilterL5 from '../../image/icon/filter-level-5.svg';

function TodoHeader(props) {
    const {
        filter: { filter, setFilter },
        getTodos,
    } = useContext(TodoContext);
    const [todoValue, setTodoValue] = useState('');
    const count = useRef(0);
    const inputEl = useRef(null);
    let url = IconFilter;

    switch (filter) {
        case 1:
            url = IconFilterL1;
            break;
        case 2:
            url = IconFilterL2;
            break;
        case 3:
            url = IconFilterL3;
            break;
        case 4:
            url = IconFilterL4;
            break;
        case 5:
            url = IconFilterL5;
            break;

        default:
            url = IconFilter;
            break;
    }

    const handleClickFilter = () => {
        count.current++;
        if (count.current > 5) {
            count.current = 0;
        }
        setFilter(count.current);
    };

    const handleChangeValue = (event) => {
        setTodoValue(event.target.value);
    };

    const handleSubmitFromTodo = (event) => {
        event.preventDefault();

        const valueTodo = {
            content: todoValue.trim(),
            complete: false,
            level: 4,
        };

        addTodo(valueTodo);

        setTodoValue('');
    };

    const addTodo = async (newTodo) => {
        try {
            let response = await todoCreated(newTodo);
            if (response) {
                getTodos();
            }
        } catch (error) {
            console.log('addTodo error: ', error);
        }
    };

    useEffect(() => inputEl.current.focus(), []);

    return (
        <div className="todo-input">
            <form action="" onSubmit={handleSubmitFromTodo}>
                <input
                    type="text"
                    placeholder="Fill into the content todo"
                    ref={inputEl}
                    value={todoValue}
                    onChange={handleChangeValue}
                ></input>
            </form>
            <img
                className="todo-icon"
                src={url}
                alt="icon filter"
                onClick={handleClickFilter}
            />
        </div>
    );
}

export default TodoHeader;
