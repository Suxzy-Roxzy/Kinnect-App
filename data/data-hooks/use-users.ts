import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteUser, getCurrentUser } from "../actions/user";
import { DeleteToken } from "../actions/auth";
import { error } from "console";

export const useGetCurrentUser = (enabled: boolean = true) => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const user = await getCurrentUser();
      return user.data;
    },
    enabled: !!enabled,
  });
};

export const useLogOutUser = () => {
  const QueryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await DeleteToken();
    },
    onSuccess: async () => {
      QueryClient.clear();
    },
  });
};
