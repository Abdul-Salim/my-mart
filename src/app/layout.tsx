"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

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
        <QueryClientProvider client={queryClient}>
          <section>
            <Navbar />
            <div className="px-5 lg:px-10 py-10">{children}</div>
          </section>
        </QueryClientProvider>
      </body>
    </html>
  );
}
