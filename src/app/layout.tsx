import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ecommerce Shop",
  description: "Ecommerce Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        style={{
          backgroundColor: "#0c0a09",
          color: "white",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
