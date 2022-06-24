import create from "zustand";
import { Session } from "@supabase/supabase-js";
import { EditedUser } from "../types";

type State = {
  session: Session | null;
  setSession: (payload: Session | null) => void;
  editedUser: EditedUser;
  updateEditedUser: (payload: EditedUser) => void;
  resetEditedUser: () => void;
};

const useStore = create<State>((set) => ({
  session: null,
  setSession: (payload) => set({ session: payload }),
  editedUser: {
    id: Math.floor(Math.random() * 99999999),
    user_id: "",
    username: "",
    avatar_url: "",
  },
  updateEditedUser: (payload) =>
    set({
      editedUser: {
        id: payload.id,
        user_id: payload.user_id,
        username: payload.username,
        avatar_url: payload.avatar_url,
      },
    }),
  resetEditedUser: () =>
    set({ editedUser: { id: 0, user_id: "", username: "", avatar_url: "" } }),
}));
export default useStore;
