import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Simple info app",
  description: "Build apps to learn docker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
