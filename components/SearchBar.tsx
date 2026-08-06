"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { categories } from "@/lib/toolsData";

type Entry = {
  title: string;
  tag: string;
  href: string;
  external?: boolean;
  keywords: string[];
};

const categoryKeywords: Record<string, string[]> = {
  video: ["video", "editor", "editing", "edit", "reel", "reels", "film", "movie", "clip", "ads", "animation", "youtube", "generator"],
  image: ["image", "images", "picture", "photo", "graphic", "post", "posts", "social", "art", "logo", "brand", "thumbnail"],
  "web-design": ["web", "website", "site", "landing", "page", "design", "ui", "interface", "frontend"],
  wordpress: ["wordpress", "template", "templates", "theme", "themes", "wp", "blog"],
  voice: ["voice", "voicer", "speech", "tts", "audio", "sound", "narration", "vocal"],
  downloader: ["download", "downloader", "save", "video", "offline"],
  converter: ["pdf", "word", "convert", "converter", "document", "doc"],
  "bg-remover": ["background", "bg", "remover", "remove", "cutout", "transparent"],
};

function buildIndex(): Entry[] {
  const entries: Entry[] = categories.map((c) => ({
    title: c.title.charAt(0) + c.title.slice(1).toLowerCase(),
    tag: "CATEGORY",
    href: `/tools/${c.slug}`,
    keywords: categoryKeywords[c.slug] ?? [],
  }));

  entries.push(
    { title: "AI Tools", tag: "PAGE", href: "/tools", keywords: ["tools", "toolkit", "ai", "generators", "apps"] },
    { title: "Abdullah's Portfolio", tag: "PAGE", href: "/portfolio", keywords: ["portfolio", "work", "abdullah", "designer", "projects", "gallery"] },
    { title: "Contact", tag: "PAGE", href: "/#contact", keywords: ["contact", "email", "hire", "project", "quote", "whatsapp"] },
  );

  const seen = new Set<string>();
  for (const c of categories) {
    for (const t of c.tools) {
      if (seen.has(t.name)) continue;
      seen.add(t.name);
      const words = `${t.name} ${t.tag}`
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .filter((w) => w.length >= 2);
      entries.push({
        title: t.name,
        tag: t.free ? "TOOL · FREE" : "TOOL",
        href: t.url,
        external: true,
        keywords: [...new Set(words)],
      });
    }
  }
  return entries;
}

const index = buildIndex();

function matches(keyword: string, token: string): boolean {
  if (keyword === token) return true;
  if (keyword.startsWith(token) && token.length >= 3) return true;
  // tolerate small typos ("editer" vs "editor") via shared 4-char prefix
  if (keyword.length >= 4 && token.length >= 4 && keyword.slice(0, 4) === token.slice(0, 4)) return true;
  return false;
}

function search(query: string): Entry[] {
  const tokens = query.toLowerCase().split(/\s+/).filter((t) => t.length >= 2);
  if (!tokens.length) return [];
  return index
    .map((entry) => {
      let score = 0;
      for (const tok of tokens) {
        if (entry.title.toLowerCase().includes(tok)) score += 2;
        if (entry.keywords.some((k) => matches(k, tok))) score += 1;
      }
      return { entry, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map((r) => r.entry);
}

export default function SearchBar({ className = "" }: { className?: string }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const results = search(query);

  const go = (entry: Entry) => {
    setOpen(false);
    setQuery("");
    inputRef.current?.blur();
    if (entry.external) {
      window.open(entry.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(entry.href);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 transition-colors focus-within:border-white/40">
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
          <circle cx="10.5" cy="10.5" r="6" stroke="#a8a297" strokeWidth="1.8" />
          <path d="M15 15L20 20" stroke="#a8a297" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          placeholder="Search... e.g. best video editor"
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && results[0]) go(results[0]);
            if (e.key === "Escape") setOpen(false);
          }}
          className="w-full bg-transparent text-sm text-pearl placeholder:text-pearl-dim/60 focus:outline-none"
        />
      </div>

      {open && query.length >= 2 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-lg border border-white/15 bg-panel shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          {results.length ? (
            results.map((r) => (
              <button
                key={r.title}
                onMouseDown={(e) => {
                  e.preventDefault();
                  go(r);
                }}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-white/[0.05]"
              >
                <span className="text-sm text-pearl">{r.title}</span>
                <span className="font-display text-[9px] tracking-[0.25em] text-pearl-dim">
                  {r.tag}
                </span>
              </button>
            ))
          ) : (
            <p className="px-4 py-3 text-sm text-pearl-dim">No matches found.</p>
          )}
        </div>
      )}
    </div>
  );
}
