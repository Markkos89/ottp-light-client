"use client";

import { FC, ReactNode } from "react";
import { GraphState, useApp } from "./AppContext";
import { NeynarContextProvider, Theme } from "@neynar/react";
import { Props } from "../interface";

const NeynarProviderWrapper: FC<Props> = ({ children }) => {
  const { setGraphButton } = useApp();

  return (
    <NeynarContextProvider
      settings={{
        clientId: process.env.NEXT_PUBLIC_NEYNAR_CLIENT_ID || "",
        defaultTheme: Theme.Light,
        eventsCallbacks: {
          onAuthSuccess: () => {
            setGraphButton(GraphState.Attest);
          },
          onSignout() {
            setGraphButton(GraphState.Signin);
          },
        },
      }}
    >
      {children}
    </NeynarContextProvider>
  );
};

export default NeynarProviderWrapper;
