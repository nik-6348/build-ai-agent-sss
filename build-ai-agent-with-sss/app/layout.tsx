import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Building AI Agent with SSS - Comprehensive Guide",
  description: "A comprehensive guide to building autonomous AI agents with LangChain, LangGraph, CrewAI, and AutoGen. Learn the fundamentals and best practices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://singaji.in/assest/SSS-Favicon-Design.png" sizes="any" />
        <link rel="apple-touch-icon" href="https://singaji.in/assest/SSS-Favicon-Design.png" sizes="180x180" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
