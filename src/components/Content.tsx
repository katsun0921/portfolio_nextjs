import Link from "next/link";
import type { NextPage } from "next";
import type { ReactNode, ReactElement } from "react";
import { contentName } from "@constants/content";
import contentStyles from "@styles/components/content.module.css";

interface IContentProps {
  children: ReactNode;
  page: string;
}

const Content: NextPage<IContentProps> = ({ children, page }): ReactElement => {
  return (
    <div className="">
      <div></div>
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
      <div className="px-2 py-10 bg-white">{children}</div>
    </div>
  );
};

export default Content;
