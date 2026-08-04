/*
 * Brand images rendered untouched from public/brand/, CSS-cropped to the
 * artwork's bounding box so the large empty margins in the source files
 * don't shrink the visible logo. Swap the files freely; if the artwork
 * position changes, only the percentages here need tuning.
 */

export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: "1.02" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo.png"
        alt="Zokix logo"
        className="absolute max-w-none"
        style={{ width: "196%", left: "-49%", top: "-48%" }}
      />
    </div>
  );
}

export function BrandWordmark({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: "2.31" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* screen blend hides the file's black background on dark surfaces */}
      <img
        src="/brand/wordmark.png"
        alt="ZOKIX"
        className="absolute max-w-none"
        style={{ width: "112.4%", left: "-6.7%", top: "-83.1%", mixBlendMode: "screen" }}
      />
    </div>
  );
}
