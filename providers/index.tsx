"use client";

import React from "react";
import { Toaster } from "sonner";
import ThemeProvider from "./theme";
import QueryProviders from "./react-query";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QueryProviders>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster position="bottom-right" richColors />
      </ThemeProvider>
    </QueryProviders>
  );
};

export default Providers;
