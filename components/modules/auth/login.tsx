"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LoginSchematype, LoginSchema } from "@/validators/schema/user";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginUser } from "@/data/actions/auth";
import { toast } from "sonner";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { SubmissionButton } from "@/components/ui/submission-button";
import { cn } from "@/lib/utils";
import { Router } from "lucide-react";
import { useLocalStorage } from "@/data/hooks/useLocalStorage";

const LoginForm = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  const searchParams = useSearchParams();
  const redirectedStored = searchParams.get("Redirect") || "/dashboard";
  const currentPathname = usePathname();
  const { setValue: setRedirectedstore, storedValue: redirected } =
    useLocalStorage<string | null>("redirected", null);
  const router = useRouter();
  const form = useForm<LoginSchematype>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });

  const {
    reset,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: LoginSchematype) => {
    try {
      // Call your login function here with the form data
      const response = await LoginUser(data);
      if ("success" in response && !response.success) {
        toast.error(response.error || "An unknown error occurred");
        return;
      } else {
        toast.success("Login successful!");
        reset();
      }

      if (redirectedStored) {
        setRedirectedstore(redirectedStored);
        router.push(redirectedStored);
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log("hello!");
      const message =
        error instanceof Error ? error.message : "An unknown error occurred";
      toast.error(message);
    }
    console.log("Consoled Successfully");
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-0 shadow-none">
        <CardContent>
          <div className="mb-6 px3 space-y-2">
            <h5 className="text-xl font-bold text-primary dark:text-white">
              Login to your account
            </h5>
            <div className="text-sm font-normal text-muted-foreground">
              Please enter your Email address and password to Login
            </div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 px-3"
            >
              <FormField
                control={form.control}
                name="userEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="johndoe@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="userPassword"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between ">
                      <FormLabel>Password</FormLabel>
                      <Link
                        href="/forgot-password"
                        className="text-sm-underline-offset-4 hover:underline"
                      >
                        Forgot Your Password?
                      </Link>
                    </div>
                    <FormControl>
                      <PasswordInput placeholder="1234&" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <SubmissionButton isSubmitting={isSubmitting} label="login" />

              <div className="text-center text-sm">
                Don&apos;t have an account?{"   "}
                <Link href="/register" className="underline underline-offset-4">
                  Sign Up
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
