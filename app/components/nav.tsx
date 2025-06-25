"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";


import { OrganizationSwitcher} from "@clerk/nextjs";

export default function nav() {
   
  return (
    <nav className="bg-[#0f172a]/80 backdrop-blur-md shadow-md border-b border-white/10 p-4 px-6 flex justify-between items-center sticky top-0 z-50">
  <div>
    <h1 className="text-3xl font-bold text-white tracking-wide">📝 Blog Application</h1>
  </div>
  <div className="flex items-center gap-4">
    <OrganizationSwitcher
      afterSelectOrganizationUrl="/org/:slug"
      appearance={{
        elements: {
          rootBox: "text-white",
        },
      }}
    />
    <UserButton
      appearance={{
        elements: {
          avatarBox: "ring-2 ring-white/30 hover:ring-white transition",
        },
      }}
    />
  </div>
</nav>

  );
}
