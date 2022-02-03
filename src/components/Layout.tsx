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
    <div className="bg-hero-sp lg:bg-hero-pc bg-cover h-screen overflow-hidden fixed w-screen z-0 before:bg-black before:h-screen before:opacity-50 before:fixed before:w-screen">
      <Head>
        <title>
          {(title = !!title ? title + " | " + defaultTitle : defaultTitle)}
        </title>
      </Head>
      {isViewNav && (
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Home
                </a>
              </Link>
              <Link href="/blog-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Blog
                </a>
              </Link>
              <Link href="/contact-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
      )}
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;
