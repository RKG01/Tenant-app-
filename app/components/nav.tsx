"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";


import { OrganizationSwitcher} from "@clerk/nextjs";

export default function nav() {
   
  return (
    <nav className="border-b-1 p-2 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-semibold">Blog Application</h1>
      </div>
      <div className="flex gap-5">
        <OrganizationSwitcher afterSelectOrganizationUrl="/org/:slug" />
        <UserButton />
      </div>
    </nav>
  );
}
