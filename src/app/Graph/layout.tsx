import { NeynarAuthButton, useNeynarContext } from "@neynar/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect } from "react";
import { Props } from "../interface";
import { GraphState, useApp } from "../Context/AppContext";

const GraphLayout = ({ children }: Props) => {
  const { setGraphButton } = useApp();
  const { isAuthenticated } = useNeynarContext();

  useEffect(() => {
    if (isAuthenticated) {
      setGraphButton(GraphState.Attest);
    } else {
      setGraphButton(GraphState.Signin);
    }
  }, [isAuthenticated, setGraphButton]);

  return (
    <main className="flex flex-col items-start justify-center px-4 py-8">
        <h1 className="text-5xl font-bold mb-4">Put your work onchain.</h1>

        <form className="w-full max-w-lg">
          <div className="mb-4">
            <label className="block text-black mb-2">
              Collaborators*
              <span className="text-gray-600 text-sm block">Tag all collaborators, using their <a href="#" className="text-blue-600">Farcaster</a> usernames, e.g. @username @username @username</span>
            </label>
            <input className="w-full border-2 border-black p-2" type="text" value="@lowcodekrish @naaate @decipher @ting" />
          </div>

          <div className="mb-4">
            <label className="block text-black mb-2">
              Contributions*
              <span className="text-gray-600 text-sm block">Describe what you worked on together.</span>
            </label>
            <textarea className="w-full border-2 border-black p-2 h-32">Worked on OTTP and completed Backdrop Build V4.</textarea>
          </div>

          <div className="mb-4">
            <label className="block text-black mb-2">
              Project
              <span className="text-gray-600 text-sm block">Tag project, if applicable, using Farcaster username.</span>
            </label>
            <input className="w-full border-2 border-black p-2" type="text" value="@ottp" />
          </div>
          {isAuthenticated && <NeynarAuthButton />}
          {children}
        </form>
      </main>
    
  );
};

export default GraphLayout;
