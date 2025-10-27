import type { Metadata } from "next";
import "./globals.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata={
  title: "Mayank Thakur",
  description: "Programmer from Mountains"
};

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return(
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow contianer mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}