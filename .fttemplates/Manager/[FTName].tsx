import React, { createContext, PropsWithChildren, useContext } from 'react';

import { T[FTName]St } from './types';
import useInitialState from './useInitialState';

interface T[FTName]PrvdProps {
  children: React.ReactNode;
}

export const [FTName]Ctx = createContext<T[FTName]St>({
  // Add initial state here
});

export const use[FTName] = () => useContext([FTName]Ctx);

export default function [FTName]({ children }: T[FTName]PrvdProps) {
  const value = useInitialState();

  return (
    <[FTName]Ctx.Provider value={value}>
      {children}
    </[FTName]Ctx.Provider>
  );
}

export function with[FTName]<P>(
  Component: React.ComponentType<PropsWithChildren<P>>
) {
  return (props: PropsWithChildren<P>) => {
    return (
      <[FTName]>
        <Component {...props} />
      </[FTName]>
    );
  };
}