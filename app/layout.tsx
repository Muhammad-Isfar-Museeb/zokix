import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

const title = "Zokix: AI-Powered Creative Tech Studio";
const description =
  "Zokix generates videos, social posts, web designs and brand identities. Black & pearl, engineered.";

export const metadata: Metadata = {
  metadataBase: new URL("https://zokix.online"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Zokix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Loader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
