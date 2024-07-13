import React, { createContext, useState } from 'react';

export const ContadorContext = createContext();

export const ContadorProvider = ({ children }) => {
    const [contador, setContador] = useState(0);

    const incrementarContador = () => {
        setContador(contador + 1);
    };

    const decrementarContador = () => {
        setContador(prevContador => Math.max(prevContador - 1, 0));
    };

    return (
        <ContadorContext.Provider value={{ contador, incrementarContador, decrementarContador }}>
            {children}
        </ContadorContext.Provider>
    );
};