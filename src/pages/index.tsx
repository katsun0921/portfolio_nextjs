import type { NextPage } from "next";
import Link from "next/link";
import type { ReactElement } from "react";
import homeStyles from "@styles/home.module.css";
import Layout from "@components/Layout";
import { pageName, pageTitle } from "@constants/page";

const Home: NextPage = (): ReactElement => {
  return (
    <Layout title={pageTitle.home} page={pageName.home}>
      <div
        className={`${homeStyles.name__block} ${homeStyles.block} top-1/2 left-1/2`}
      >
        <div
          className={`${homeStyles.container} ${homeStyles.name__container}`}
        >
          <h1 className={`${homeStyles.name__text} drop-shadow`}>
            KATSUMASA SATO
            <span className={`${homeStyles.name__text__sub} block`}>
              WEB DEVELOPER
            </span>
          </h1>
          <ul className="mt-5">
            <li className={`${homeStyles.name__linkList}`}>
              Twitter:
              <Link href="https://twitter.com/Katsun0921/" passHref>
                <a className="ml-2" target="_blank" rel="noopener noreferrer">
                  https://twitter.com/Katsun0921
                </a>
              </Link>
            </li>
            <li className={`${homeStyles.name__linkList}`}>
              TechBlog:
              <Link href="https://zenn.dev/katsun0921" passHref>
                <a className="ml-2" target="_blank" rel="noopener noreferrer">
                  https://zenn.dev/katsun0921
                </a>
              </Link>
            </li>
            <li className={`${homeStyles.name__linkList}`}>
              GitHub:
              <Link href="https://github.com/katsun0921/" passHref>
                <a className="ml-2" target="_blank" rel="noopener noreferrer">
                  https://github.com/katsun0921
                </a>
              </Link>
            </li>
            <li className={`${homeStyles.name__linkList}`}>
              レビューBlog:
              <Link href="https://katsumascore.blog" passHref>
                <a className="ml-2" target="_blank" rel="noopener noreferrer">
                  https://katsumascore.blog
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <ul className={`${homeStyles.contents} absolute top-1/2 left-1/2`}>
        <li>
          <Link href="/profile">
            <a
              className={`${homeStyles.block} ${homeStyles.content__block} ${homeStyles.profile__block}`}
            >
              <div
                className={`${homeStyles.container} ${homeStyles.profile__container}`}
              >
                <h2
                  className={`${homeStyles.content__text} ${homeStyles.profile__text}`}
                >
                  PROFILE
                </h2>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/work-express">
            <a
              className={`${homeStyles.block} ${homeStyles.content__block} ${homeStyles.workExpress__block}`}
            >
              <div className={homeStyles.container}>
                <h2
                  className={`${homeStyles.content__text} ${homeStyles.workExpress__text}`}
                >
                  WORK EXPRESS
                </h2>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a
              className={`${homeStyles.block} ${homeStyles.content__block} ${homeStyles.blog__block}`}
            >
              <div className={homeStyles.container}>
                <h2
                  className={`${homeStyles.content__text} ${homeStyles.blog__text}`}
                >
                  BLOG
                </h2>
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
};

export default Home;
