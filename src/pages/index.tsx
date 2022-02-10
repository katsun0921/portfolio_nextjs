import type { NextPage } from "next";
import Link from "next/link";
import type { ReactElement } from "react";
import homeStyles from "@styles/pages/home.module.css";
import Layout from "@components/Layout";
import { pageName, pageTitle } from "@constants/page";

const Home: NextPage = (): ReactElement => {
  return (
    <Layout title={pageTitle.home} page={pageName.home}>
      <div
        className={`${homeStyles.name__block} ${homeStyles.block} w-11/12 mt-11 lg:m-0 lg:top-1/2 lg:left-1/2`}
      >
        <div
          className={`${homeStyles.container} ${homeStyles.name__container}`}
        >
          <h1 className={`${homeStyles.name__text} drop-shadow text-4xl`}>
            KATSUMASA SATO
            <span className={`${homeStyles.name__text__sub} block text-2xl`}>
              WEB DEVELOPER
            </span>
          </h1>
          <ul className="mt-1 lg:mt-5">
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
      <ul className={`w-11/12 mt-3 lg:absolute lg:top-1/2 lg:left-1/2`}>
        <li className={`${homeStyles.content__list} border-t`}>
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
        <li className={`${homeStyles.content__list}`}>
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
        <li className={`${homeStyles.content__list}`}>
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
