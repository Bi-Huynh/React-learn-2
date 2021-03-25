import React, { createContext, useEffect, useReducer } from 'react';

export const TodoContext = createContext(null);
TodoContext.displayName = 'TodoContext';

export const ACTION_TODO = {
    RESET: 'resetTodos',
    TODO_COMPLETED: 'todoCompleted',
    TODO_LEVEL: 'todoLevel',
    TODO_DELETED: 'todoDeleted',
    TODO_DELETED_COMPLETED: 'todoDeletedCompleted',
    TODO_DELETED_ALL: 'todoDeletedAll',
};

const reducer = (todos, action) => {
    switch (action.type) {
        case ACTION_TODO.RESET: {
            return JSON.parse(JSON.stringify(action.list));
        }
        case ACTION_TODO.TODO_COMPLETED: {
            let level = 4;
            return todos.map((todo) => {
                if (todo.id === action.id) {
                    if (!todo.complete) level = 5;
                    return { ...todo, complete: !todo.complete, level };
                }
                return todo;
            });
        }
        case ACTION_TODO.TODO_LEVEL: {
            return todos.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        level: todo.level === 5 ? 1 : todo.level++,
                    };
                }
                return todo;
            });
        }
        case ACTION_TODO.TODO_DELETED: {
            return todos.filter((todo) => {
                return todo.id != action.id;
            });
        }
        case ACTION_TODO.TODO_DELETED_COMPLETED: {
            return todos.filter((todo) => {
                return !todo.complete || todo.level != 5;
                // lấy những thằng có complete = false là đủ r
                // để cho chắc thì thêm luôn điều kiện là level khác 5 luôn
            });
        }
        case ACTION_TODO.TODO_DELETED_ALL: {
            return [];
        }
        default:
            return todos;
    }
};

const init = [
    {
        id: 1,
        content: 'Todo Content 1',
        complete: true,
        level: 5,
    },
    {
        id: 2,
        content: 'Todo Content 2',
        complete: false,
        level: 4,
    },
    {
        id: 3,
        content: 'Todo Content 3',
        complete: false,
        level: 1,
    },
];

function TodoProvider({ children }) {
    const [todos, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        dispatch({ type: ACTION_TODO.RESET, list: init });
    }, []);

    const stores = {
        todos,
        dispatch,
    };

    return (
        <TodoContext.Provider value={stores}>{children}</TodoContext.Provider>
    );
}

export default TodoProvider;
