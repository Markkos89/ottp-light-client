"use client";

import { FC } from "react";
import { NeynarContextProvider, Theme } from "@neynar/react";
import { Props } from "@/app/interface";

const NeynarProviderWrapper: FC<Props> = ({ children }) => {
  return (
    <NeynarContextProvider
      settings={{
        clientId: process.env.NEXT_PUBLIC_NEYNAR_CLIENT_ID || "",
        defaultTheme: Theme.Light,
        eventsCallbacks: {
          onAuthSuccess: () => {},
          onSignout() {},
        },
      }}
    >
      {children}
    </NeynarContextProvider>
  );
};

export default NeynarProviderWrapper;
