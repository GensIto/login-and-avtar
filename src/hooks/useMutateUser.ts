import { useQueryClient, useMutation } from "react-query";
import { supabase } from "../utols/supabase";
import { User } from "../types";
import useStore from "../store";

export const useMutateUser = () => {
  const session = useStore((state) => state.session);
  const queryClient = useQueryClient();
  const createUserMutation = useMutation(
    async (user: Omit<User, "created_at">) => {
      const { data, error } = await supabase.from("user").insert(user);
      if (error) throw new Error(error.message);
      return data;
    },
    {
      onSuccess: (res) => {
        queryClient.setQueryData(["user"], res[0]);
      },
      onError: (err: any) => {
        alert(err.message);
      },
    }
  );
  const updateUserMutation = useMutation(
    async (user: Omit<User, "created_at">) => {
      const { data, error } = await supabase
        .from("user")
        .update(user)
        .eq("user_id", session?.user?.id);
      if (error) throw new Error(error.message);
      return data;
    },
    {
      onSuccess: (res) => {
        queryClient.setQueryData(["user"], res[0]);
      },
      onError: (err: any) => {
        alert(err.message);
      },
    }
  );
  return { createUserMutation, updateUserMutation };
};
