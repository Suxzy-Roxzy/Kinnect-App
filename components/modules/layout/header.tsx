"use client";
import {} from "@/data/actions/user";
import { useGetCurrentUser } from "@/data/data-hooks/use-users";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";

const DashBoardHeader = () => {
  const {
    data: user,
    isLoading: isLoading,
    error: error,
  } = useGetCurrentUser();

  const currentUser = user?.last_name;

  return <>Welcome, {currentUser}!</>;
};

export default DashBoardHeader;
