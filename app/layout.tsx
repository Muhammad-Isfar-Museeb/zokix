import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "Zokix: AI-Powered Creative Tech Studio",
  description:
    "Zokix generates videos, social posts, web designs and brand identities. Black & pearl, engineered.",
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
