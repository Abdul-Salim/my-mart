"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { RecoilRoot } from "recoil";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./globals.css";

const Navbar = dynamic(() => import("./components/layout/Navbar"), {
  ssr: false,
});

const queryClient = new QueryClient();

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-secondary">
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <section>
              <Navbar />
              <div className="px-5 lg:px-10 py-10">{children}</div>
            </section>
          </QueryClientProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
