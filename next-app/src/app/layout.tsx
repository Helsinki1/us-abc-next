import type { Metadata } from "next";
import Header from "../components/header"
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header/>
        {children}
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};