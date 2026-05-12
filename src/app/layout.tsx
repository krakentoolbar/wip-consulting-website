import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WIP Consulting Co. | Former Amazon VM Turned 1P Consultant",
  description:
    "Former Amazon Vendor Manager who managed a $500M+ P&L across 35 vendors. Now I partner with 3-5 brands at a time to run their Amazon 1P strategy from the inside.",
  metadataBase: new URL("https://wipconsulting.us"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
