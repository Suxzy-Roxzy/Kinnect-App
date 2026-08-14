"use client";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import ThemeSwitcher from "./theme-switch";
import SearchInputComponent from "./search-bar";
import NotificationBtn from "./notification-btn";
import AvatarDropdown from "./avatar-dropdown";

const Navbar = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <header className="flex py-3 items-center gap-4 bg-card px-4 lg:px-6 border-b border-border ">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        className="h-8 w-8 md:h-9 md:w-9 flex"
      >
        <Menu className="h-4 w-4 md:h-5 md:w-5" />
        <span className="sr-only">Toggle Navigation Menu</span>
      </Button>

      <div className="ml-auto flex items-center gap-3">
        <SearchInputComponent />
      </div>

      <NotificationBtn />
      <ThemeSwitcher />
      <AvatarDropdown />
    </header>
  );
};

export default Navbar;
