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
    <div className={`bg-hero-sp lg:bg-hero-pc bg-cover h-screen lg:overflow-hidden lg:fixed w-screen z-0 before:bg-black before:h-screen before:opacity-50 before:fixed before:w-screen ${classOverflow}`}>
      <Head>
        <title>{(title = !!title ? title + " | " + defaultTitle : defaultTitle)}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_package/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_package/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_package/site.webmanifest" />
        <link rel="mask-icon" href="/favicon_package/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {children}
    </div>
  );
};
