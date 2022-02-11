import Link from "next/link";
import type { NextPage } from "next";
import type { ReactNode, ReactElement } from "react";
import { Name } from "@components/index";
import { contentName } from "@constants/content";
import contentStyles from "@styles/components/content.module.css";

interface IContentProps {
  children: ReactNode;
  page: string;
}

export const Content: NextPage<IContentProps> = ({
  children,
  page,
}): ReactElement => {
  return (
    <div className={`flex ${contentStyles.content}`}>
      <div
        className={`hidden lg:block flex-shrink-0 h-screen relative z-0 ${contentStyles.name}`}
      >
        <div className="fixed top-1/2 transform -translate-y-1/2 ml-7">
          <Name page={page} />
        </div>
      </div>
      <div className="z-10">
        <div className="fixed z-10 right-0">
          <nav className={contentStyles.navBar}>
            {Object.keys(contentName).map((key, index) => {
              return (
                <Link key={index} href={`/${key}`}>
                  <a
                    className={
                      (page === key
                        ? "text-white bg-active-color"
                        : "text-black hover:bg-active-color hover:text-white") +
                      ` px-3 h-full ${contentStyles.navText}`
                    }
                  >
                    {contentName[key].nav}
                  </a>
                </Link>
              );
            })}
            <Link href="/">
              <a className={`relative ${contentStyles.closeBlock}`}>
                <div
                  className={`transform rotate-45 -translate-x-1/2 h-px absolute inset-1/2 ${contentStyles.closeLine}`}
                ></div>
                <div
                  className={`transform -rotate-45 -translate-x-1/2 h-px absolute inset-1/2 ${contentStyles.closeLine}`}
                ></div>
              </a>
            </Link>
          </nav>
        </div>
        <main className="px-2 py-10 bg-white z-0">{children}</main>
      </div>
    </div>
  );
};
