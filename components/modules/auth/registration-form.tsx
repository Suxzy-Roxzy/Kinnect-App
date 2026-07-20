"use client";
import { registerUser } from "@/data/actions/auth";
import { RegisterSchema, RegisterSchematype } from "@/validators/schema/user";
import { UserType } from "@/validators/types/user";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
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
import Link from "next/link";

const RegistrationForm = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  const form = useForm<RegisterSchematype>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = form;
  const onSubmit = async (userData: UserType) => {
    try {
      await registerUser(userData);
      // Handle successful registration (e.g., show a success message, redirect, etc.)
      toast.success("Registration successful!");
      // reset form and push to onboarding or dashboard page
      reset();
      router.push("/onboarding");
    } catch (error) {
      
      // Handle registration error (e.g., show an error message)
      toast.error("Registration failed. Please try again.");
    }
  };
  return (
    <div className={className} {...props}>
       <Card className="border-0 shadow-none ">
        <CardContent>
          <div className="mb-6 px-3 space-y-2">
            <h5 className="text-xl font-bold text-primary dark:text-white">
              Create Account
            </h5>
            <div className="text-sm font-normal text-muted-foreground">
              Please enter your <span className="font-bold">Details</span> to
              create an account
            </div>
          </div>

          <Form {...form}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-8 px-3"
            >
              {/* NAME FIELDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="john" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Email</FormLabel>
                    <FormControl>
                      <Input placeholder="name@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Submit */}
              <SubmissionButton
                isSubmitting={isSubmitting}
                label="Create Account"
              />
              {/* Link */}
              Already have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Sign in
              </Link>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationForm;
