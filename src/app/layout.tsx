import type { Metadata } from "next";
import "./globals.css";
import Menu from "./components/Menu/Menu";
import { Belle } from "./Fonts/Fonts";

export const metadata: Metadata = {
  title: "Space tourism",
  description: "Space tourism multi-page website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${Belle.className} `}>
        <div className="">
          <Menu />
        </div>
        {children}
      </body>
    </html>
  );
}
