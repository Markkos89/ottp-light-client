"use client";

import { useContext, createContext, useMemo, useState, FC, ReactNode } from "react";
import { AppContextInterface, Props } from "../interface";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export enum GraphState {
  Signin = "signin",
  Attest = "attest",
}

const AppContext = createContext<AppContextInterface | null>(null);

export const AppProvider: FC<Props> = ({ children }) => {
  const [graphButton, setGraphButton] = useState<GraphState>(GraphState.Signin);

  const value: AppContextInterface | null = useMemo(
    () => ({
        graphButton,
        setGraphButton,
    }),
    [graphButton]
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = (): AppContextInterface => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("AppContext must be used within AppProvider");
  }
  return context;
};
