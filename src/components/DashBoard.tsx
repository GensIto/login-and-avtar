import { Layout } from "../components/Layout";
import Logout from "./Logout";
import { supabase } from "../utols/supabase";
import { UserAvatar } from "./UserAvatar";

export const DashBoard = () => {
  return (
    <Layout title='DashBoard'>
      <Logout />
      <UserAvatar />
    </Layout>
  );
};
