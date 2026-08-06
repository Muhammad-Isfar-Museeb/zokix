import Link from "next/link";
import { BrandLogo, BrandWordmark } from "./Brand";

export default function Footer() {
  return (
    <footer className="bg-panel">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 border-x hairline px-5 py-12 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <BrandLogo className="h-8" />
          <BrandWordmark className="h-5" />
        </div>
        <nav className="flex gap-6 text-xs tracking-wide text-pearl-dim">
          <Link href="/#ai-tools" className="hover:text-pearl-bright">
            AI Tools
          </Link>
          <Link href="/portfolio" className="hover:text-pearl-bright">
            Portfolio
          </Link>
          <Link href="/#contact" className="hover:text-pearl-bright">
            Contact
          </Link>
        </nav>
        <p className="text-xs text-pearl-dim">
          © {new Date().getFullYear()} Zokix. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
