import React, { createContext, useEffect, useReducer, useState } from 'react';
import * as todoApi from '../api/todoApi';

export const TodoContext = createContext(null);
TodoContext.displayName = 'TodoContext';

// export const ACTION_TODO = {
//     RESET: 'resetTodos',
//     TODO_COMPLETED: 'todoCompleted',
//     TODO_LEVEL: 'todoLevel',
//     TODO_DELETED: 'todoDeleted',
//     TODO_DELETED_COMPLETED: 'todoDeletedCompleted',
//     TODO_DELETED_ALL: 'todoDeletedAll',
//     ADD_TODO: 'addTodo',
// };

// const reducer = (todos, action) => {
//     switch (action.type) {
//         case ACTION_TODO.RESET: {
//             return JSON.parse(JSON.stringify(action.list));
//         }
//         case ACTION_TODO.TODO_COMPLETED: {
//             let level = 4;
//             return todos.map((todo) => {
//                 if (todo.id === action.id) {
//                     if (!todo.complete) level = 5;
//                     return { ...todo, complete: !todo.complete, level };
//                 }
//                 return todo;
//             });
//         }
//         case ACTION_TODO.TODO_LEVEL: {
//             return todos.map((todo) => {
//                 if (todo.id === action.id) {
//                     return {
//                         ...todo,
//                         level: todo.level === 5 ? 1 : todo.level++,
//                     };
//                 }
//                 return todo;
//             });
//         }
//         case ACTION_TODO.TODO_DELETED: {
//             return todos.filter((todo) => {
//                 return todo.id !== action.id;
//             });
//         }
//         case ACTION_TODO.TODO_DELETED_COMPLETED: {
//             return todos.filter((todo) => {
//                 return !todo.complete;
//                 // lấy những thằng có complete = false là đủ r
//                 // để cho chắc thì thêm luôn điều kiện là level khác 5 luôn
//             });
//         }
//         case ACTION_TODO.TODO_DELETED_ALL: {
//             return [];
//         }
//         case ACTION_TODO.ADD_TODO: {
//             // return [action.newTodo, ...todos];
//         }
//         default:
//             return todos;
//     }
// };

function TodoProvider({ children }) {
    // const [todos, dispatch] = useReducer(reducer, []);
    const [filter, setFilter] = useState(0);
    const [todoList, setTodoList] = useState([]);

    const getTodos = async (params = null) => {
        try {
            let data = await todoApi.getAll(params).then((data) => data);
            setTodoList([...data]);
        } catch (error) {
            console.log('getTodos error: ', error);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    const stores = {
        filter: { filter, setFilter },
        list: { todoList, setTodoList },
        getTodos,
    };

    return (
        <TodoContext.Provider value={stores}>{children}</TodoContext.Provider>
    );
}

export default TodoProvider;
