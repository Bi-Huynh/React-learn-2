import React, { createContext, useReducer } from 'react';

const TodoContext = createContext(null);
TodoContext.displayName = 'TodoContext';

const ACTION_TODO = {};

const reducer = (todos, action) => {
    switch (action.type) {
        default:
            return todos;
    }
};

function TodoProvider({ children }) {
    const [todos, dispatch] = useReducer(reducer, []);

    const stores = {
        todos,
        dispatch,
    };

    return (
        <TodoContext.Provider value={stores}>{children}</TodoContext.Provider>
    );
}

export default TodoProvider;
