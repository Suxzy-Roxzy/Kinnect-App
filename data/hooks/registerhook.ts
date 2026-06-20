"use client";
import { registerUser } from "@/data/actions/auth";
import { RegisterSchema } from "@/validators/schema/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import z from "zod";

export function useRegister() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: z.infer<typeof RegisterSchema>) => {
      await registerUser(data);
    },
    onSuccess: () => {
      // Update client cache if needed
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
}
