import React, { createContext, useContext, useState } from 'react';

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
  const [completed, setCompleted] = useState(true);

  const toggleCompleted = (value) => {
    setCompleted(value);
  };

  return (
    <TransitionContext.Provider
      value={{
        toggleCompleted,
        completed,
      }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransitionContext = () => {
  return useContext(TransitionContext);
};
