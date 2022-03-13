import Head from "next/head";

import { contentName } from "@constants/content";

import type { NextPage } from "next";
import type { ReactNode, ReactElement } from "react";

interface ILayoutProps {
  children: ReactNode;
  title: string;
  page: string;
}

export const Layout: NextPage<ILayoutProps> = ({ children, title, page }): ReactElement => {
  const defaultTitle = "Katsumasa Sato of Portfolio Site";
  const isContent = Object.keys(contentName).indexOf(page) !== -1;
  const classOverflow = isContent ? "lg:overflow-scroll" : "lg:overflow-hidden";

  return (
    <div className={`bg-hero-sp lg:bg-hero-pc bg-cover lg:h-screen lg:overflow-hidden lg:fixed w-screen z-0 before:bg-black before:h-screen before:opacity-50 before:fixed before:w-screen ${classOverflow}`}>
      <Head>
        <title>{(title = !!title ? title + " | " + defaultTitle : defaultTitle)}</title>
      </Head>
      {children}
    </div>
  );
};
