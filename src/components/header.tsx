import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-semibold">Donovan Ho</h1>
      <Link href="/">
        <p className="text-[#808080]">Resume</p>
      </Link>
      <Link href="/logs">
        <span className="text-[#808080]">Project Logs</span>
      </Link>
    </div>
  );
}
