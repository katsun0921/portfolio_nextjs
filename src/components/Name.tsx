import type { NextPage } from "next";
import type { ReactElement } from "react";
import { Fragment } from "react";
import Link from "next/link";
import nameStyles from "@styles/components/name.module.css";
import { isContent } from "@lib/index";

interface INameProps {
  page: string;
}

export const Name: NextPage<INameProps> = (props: INameProps): ReactElement => {
  const fullName = (props: INameProps) => {
    const page = props.page;
    if (isContent(page)) {
      return (
        <Fragment>
          KATSUMASA
          <br />
          SATO
        </Fragment>
      );
    } else {
      return "KATSUMASA SATO";
    }
  };

  return (
    <div className="text-white">
      <h1 className={`${nameStyles.text} drop-shadow text-4xl`}>
        {fullName(props)}
        <span className={`${nameStyles.textSub} block text-2xl`}>
          WEB DEVELOPER
        </span>
      </h1>
      <ul className="mt-1 lg:mt-5">
        <li className={`${nameStyles.linkList}`}>
          Twitter:
          <Link href="https://twitter.com/Katsun0921/" passHref>
            <a className="ml-2" target="_blank" rel="noopener noreferrer">
              https://twitter.com/Katsun0921
            </a>
          </Link>
        </li>
        <li className={`${nameStyles.linkList}`}>
          TechBlog:
          <Link href="https://zenn.dev/katsun0921" passHref>
            <a className="ml-2" target="_blank" rel="noopener noreferrer">
              https://zenn.dev/katsun0921
            </a>
          </Link>
        </li>
        <li className={`${nameStyles.linkList}`}>
          GitHub:
          <Link href="https://github.com/katsun0921/" passHref>
            <a className="ml-2" target="_blank" rel="noopener noreferrer">
              https://github.com/katsun0921
            </a>
          </Link>
        </li>
        <li className={`${nameStyles.linkList}`}>
          レビューBlog:
          <Link href="https://katsumascore.blog" passHref>
            <a className="ml-2" target="_blank" rel="noopener noreferrer">
              https://katsumascore.blog
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
