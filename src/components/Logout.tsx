import { LoginIcon } from "@heroicons/react/solid";
import React from "react";
import { useQueryClient } from "react-query";
import { supabase } from "../utols/supabase";

const Logout = () => {
  const queryClient = useQueryClient();

  const signOut = () => {
    supabase.auth.signOut();
  };

  return (
    <>
      <LoginIcon
        className='absolute top-0 left-0 mt-1 ml-2 h-12 w-12 text-indigo-600'
        onClick={signOut}
      />
    </>
  );
};

export default Logout;
