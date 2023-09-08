import React, { createContext, useContext, useState } from 'react';

const NosotrosContext = createContext();

function NosotrosProvider({ children }) {
    const [nosotros, setNosotros] = useState('Misión');
    const changeNosotros = (newState) => {
        setNosotros(newState);
    };

    return (
        <NosotrosContext.Provider value={{ nosotros, setNosotros, changeNosotros }}>
            {children}
        </NosotrosContext.Provider>
    );
}

export { NosotrosProvider, NosotrosContext };
