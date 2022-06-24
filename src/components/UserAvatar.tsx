import { useState, useEffect } from "react";
import { supabase } from "../utols/supabase";
import { User } from "../types";
import { UserUpdate } from "./UserUpdate";
import { CogIcon } from "@heroicons/react/solid";
import { UserCreate } from "./userCreate";

export const UserAvatar = () => {
  const [user, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [setting, setSetting] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      // sampleテーブルから全カラムのデータをid順に取得
      // dataに入る型はそのままだとany[]となるため.from<T>で指定
      const { data, error } = await supabase.from<User>("user").select("*");

      if (error) {
        throw error;
      }
      if (data) {
        setUser(data);
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>loading...</div>;
  // なかったらなかったら作成させる
  if (!user.length)
    return (
      <div>
        <UserCreate />
      </div>
    );

  return (
    <div className='flex flex-col items-center'>
      {user.map((item) => (
        <div key={item.user_id}>
          <p className='flex items-center text-center text-indigo-400'>
            {item.username}
            <CogIcon
              className='ml-1 h-4 w-4 text-center text-gray-100'
              onClick={() => setSetting(!setting)}
            />
          </p>
          <img className='rounded-full bg-white p-1' src={item.avatar_url} />
        </div>
      ))}
      {setting ? <UserUpdate /> : ""}
    </div>
  );
};
