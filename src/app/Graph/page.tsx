"use client";

import Head from 'next/head';
import Link from 'next/link';
import { NeynarAuthButton, useNeynarContext } from "@neynar/react";


export default function Graph() {
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
          <NeynarAuthButton />
          
        </form>
      </main>
  )
}
