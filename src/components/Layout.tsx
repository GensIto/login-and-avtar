import { FC, ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children, title = "GensApp" }) => {
  return (
    <div className='flex min-h-screen'>
      <header></header>
      <main className='flex flex-1 flex-col items-center justify-center bg-gray-800 p-4'>
        {children}
      </main>
      <footer></footer>
    </div>
  );
};
