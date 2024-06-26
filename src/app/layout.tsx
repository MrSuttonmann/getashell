import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GetAShell",
  description: "Quickly spin up docker containers to ssh into!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="dark">
          {children}
          <ToastContainer
            position="top-center"
            hideProgressBar={true}
            limit={1}
            autoClose={350}
          />
        </Theme>
      </body>
    </html>
  );
}
