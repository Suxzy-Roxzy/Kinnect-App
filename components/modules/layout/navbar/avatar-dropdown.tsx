import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Spinner } from "@/components/ui/spinner";
import { useGetCurrentUser } from "@/data/data-hooks/use-users";
import {
  ChevronDownIcon,
  LogOutIcon,
  Settings,
  ShieldCheck,
  User,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import LogoutModal from "../../auth/logout";

const AvatarDropdown = ({
  direction = "end",
}: {
  direction?: "start" | "center" | "end";
}) => {
  const { data: userProfile } = useGetCurrentUser();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="primary"
            appearance={"ghost"}
            className="h-auto p-0 hover:bg-transparent"
          >
            <Avatar>
              {/* <AvatarImage
                src={userProfile?.avatar || undefined}
                alt={`${userProfile?.first_name} ${userProfile?.last_name}`}
                className="object-cover object-top"
              /> */}
              <AvatarFallback>
                {userProfile?.first_name
                  ? userProfile.first_name.charAt(0).toUpperCase()
                  : ""}
              </AvatarFallback>
            </Avatar>
            <ChevronDownIcon size={16} className="opacity-60" aria-hidden />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="max-w-72" align={direction}>
          <DropdownMenuLabel className="flex min-w-0 flex-col">
            <span className="text-foreground truncate text-xs font-normal">
              {userProfile?.email}
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href="/profile">
                <User
                  size={16}
                  className="opacity-60 hover:text-primary"
                  aria-hidden="true"
                />
                <span>Manage Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/manage-expenses">
                <Settings
                  size={16}
                  className="opacity-60 hover:text-primary"
                  aria-hidden="true"
                />
                <span>Manage Expenses</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            variant="destructive"
            onClick={() => setShowLogoutModal(true)}
          >
            <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Logout Modal */}
      <LogoutModal
        open={showLogoutModal}
        handleToggle={() => setShowLogoutModal(false)}
      />
    </>
  );
};

export default AvatarDropdown;
