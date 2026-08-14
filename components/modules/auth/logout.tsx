"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Spinner } from "@/components/ui/spinner";
// import { DeleteToken } from "@/data/actions/auth";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

type LogoutModalProps = {
  open: boolean;
  handleToggle: (open: boolean) => void;
};

const LogoutModal = ({ open, handleToggle }: LogoutModalProps) => {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  //   I have got a question Here, "Won't it be Ideal to just use isLoading? Getting it from the the function as what it returns? rather than use a custom is submitting?"
  const Logout = async () => {
    setSubmitting(true);
    try {
      toast.success("Logout SuccessFull");
      router.push("/login");
    } catch (error: any) {
      toast.error(error || "Login Failed 😤");
    }
    setSubmitting(false);
  };
  return (
    <>
      <AlertDialog open={open} onOpenChange={handleToggle}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              <LogOut className="size-5 text-muted-foreground" /> Logout
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            Are You Sure You want To Logout?
          </AlertDialogDescription>
          <AlertDialogFooter className="gap-3">
            <AlertDialogCancel>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={Logout} disabled={submitting} >
              {submitting ? <Spinner /> : ""}
              {submitting ? "Logging out..." : "Logout"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default LogoutModal;
