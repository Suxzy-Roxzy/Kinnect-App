import { Card } from "@/components/ui/card";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-svh items-center justify-center my-10">
      <Card className="p-4 shadow-lg w-200">
        <>{children}</>
      </Card>
    </div>
  );
};

export default AuthLayout;
