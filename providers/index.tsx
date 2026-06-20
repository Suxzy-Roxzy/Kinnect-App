"use client";

import React from "react";
import { Toaster } from "sonner";
import ThemeProvider from "./theme";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster position="bottom-right" richColors/>
    </ThemeProvider>
  );
};

export default Providers;
