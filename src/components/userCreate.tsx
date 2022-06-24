import { useState, FormEvent } from "react";
import { useMutateUser } from "../hooks/useMutateUser";
import useStore from "../store";
import Image from "next/image";
import { supabase } from "../utols/supabase";

export const UserCreate = () => {
  const session = useStore((state) => state.session);
  const editedUser = useStore((state) => state.editedUser);
  const { updateUserMutation, createUserMutation } = useMutateUser();
  const update = useStore((state) => state.updateEditedUser);
  const handlerSubmit = (e: any) => {
    e.preventDefault();
    createUserMutation.mutate({
      id: editedUser.id,
      user_id: supabase.auth.user()?.id,
      username: editedUser.username,
      avatar_url: editedUser.avatar_url,
    });
  };
  const ImgSrc = [
    {
      id: "1",
      path: "bmo.svg",
      value:
        "https://zxxksodenboyiusmjuxn.supabase.co/storage/v1/object/public/avatars/bmo.svg",
    },
    {
      id: "2",
      path: "jake.svg",
      value:
        "https://zxxksodenboyiusmjuxn.supabase.co/storage/v1/object/public/avatars/jake.svg",
    },
    {
      id: "3",
      path: "jerry.svg",
      value:
        "https://zxxksodenboyiusmjuxn.supabase.co/storage/v1/object/public/avatars/jerry.svg",
    },
    {
      id: "4",
      path: "smith.svg",
      value:
        "https://zxxksodenboyiusmjuxn.supabase.co/storage/v1/object/public/avatars/smith.svg",
    },
  ];
  return (
    <div>
      <p className='mt-4 text-center'>Username</p>
      <input
        className='my-2 mx-2 rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none'
        type='text'
        placeholder='Username'
        value={editedUser.username || ""}
        onChange={(e) => update({ ...editedUser, username: e.target.value })}
      />
      <p className='text-center'>Avatar IMG</p>
      <div className='flex flex-row justify-center'>
        {ImgSrc.map((src) => (
          <div
            key={src.id}
            className='flex flex-col items-center justify-center'>
            <label htmlFor='avatar'>
              <Image src={`/${src.path}`} height={48} width={48} />
            </label>
            <input
              type='radio'
              name='avatar'
              value={src.value}
              onChange={(e) =>
                update({ ...editedUser, avatar_url: e.target.value })
              }
            />
          </div>
        ))}
      </div>
      <button
        className={`my-5 w-full text-center ${
          updateUserMutation.isLoading || !editedUser.username
            ? "bg-gray-400"
            : "bg-indigo-600"
        } px-3 py-2 text-sm font-medium text-white`}
        onClick={handlerSubmit}
        disabled={updateUserMutation.isLoading || !editedUser.username}>
        {updateUserMutation.isLoading ? "Loading ..." : "Update"}
      </button>
    </div>
  );
};
