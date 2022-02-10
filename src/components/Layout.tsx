import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import type { ReactNode, ReactElement } from "react";
import { pageName } from "@constants/page";

interface ILayoutProps {
  children: ReactNode;
  title: string;
  page: string;
}

const Layout: NextPage<ILayoutProps> = ({
  children,
  title,
  page,
}): ReactElement => {
  const defaultTitle = "Katsumasa Sato of Portfolio Site";

  const isViewNav = page === pageName.blog;

  return (
    <div className="bg-hero-sp lg:bg-hero-pc bg-cover lg:h-screen lg:overflow-hidden lg:fixed w-screen z-0 before:bg-black before:h-screen before:opacity-50 before:fixed before:w-screen">
      <Head>
        <title>
          {(title = !!title ? title + " | " + defaultTitle : defaultTitle)}
        </title>
      </Head>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;
