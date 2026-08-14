"use client";
import Navbar from "@/components/modules/layout/navbar/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SidebarProvider>
        <main className="w-full h-screen overflow-hidden">
          <Navbar />
          <div className="p-2 pt-0 md:p-4 md:pr-6 md:pt-0 pb-24">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
