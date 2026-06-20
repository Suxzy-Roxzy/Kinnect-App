import MainpageNav from "@/components/layouts/mainpage_nav";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <MainpageNav />
      {children}
    </div>
  );
};

export default Layout;
