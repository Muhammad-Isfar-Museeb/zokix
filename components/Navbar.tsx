"use client";

import Link from "next/link";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { BrandLogo, BrandWordmark } from "./Brand";

const links = [
  { href: "/#ai-tools", label: "AI Tools" },
  { href: "/#why", label: "Why Zokix" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b hairline bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2">
          <BrandLogo className="h-9" />
          <BrandWordmark className="h-6" />
        </Link>

        <SearchBar className="hidden w-56 xl:w-72 lg:block" />

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-pearl-dim transition-colors hover:text-pearl-bright"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="btn-pearl rounded-lg px-4 py-2 font-display text-xs font-bold tracking-widest"
          >
            START A PROJECT
          </Link>
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-pearl" />
            <span className="block h-0.5 w-6 bg-pearl" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t hairline bg-panel px-5 py-4 lg:hidden">
          <SearchBar className="mb-3" />
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-pearl-dim hover:text-pearl-bright"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
