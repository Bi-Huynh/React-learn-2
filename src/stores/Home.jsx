import React, { createContext, useState } from 'react';

export const HomeContext = createContext(null);
HomeContext.displayName = 'HomeContext';

const StoresHome = ({ children }) => {
    const [activeTodo, setActiveTodo] = useState(false);

    const stores = {
        ActiveTodo: { activeTodo, setActiveTodo },
    };

    return (
        <HomeContext.Provider value={stores}>{children}</HomeContext.Provider>
    );
};

export default StoresHome;
