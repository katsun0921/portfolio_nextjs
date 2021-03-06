import Link from "next/link";

import { Layout, Name } from "@components/_Index";
import { pageName, pageTitle } from "@constants/page";
import homeStyles from "@styles/pages/Home.module.css";

import type { NextPage } from "next";
import type { ReactElement } from "react";

const Home: NextPage = (): ReactElement => {
  return (
    <Layout title={pageTitle.home} page={pageName.home}>
      <main>
        <div className={`${homeStyles.name__block} ${homeStyles.block} w-11/12 pt-11 pl-4 lg:pl-0 lg:m-0 lg:top-1/2 lg:left-1/2`}>
          <div className={`${homeStyles.container} ${homeStyles.name__container}`}>
            <Name page={pageName.home} />
          </div>
        </div>
        <ul className={`w-11/12 mt-3 lg:absolute lg:top-1/2 lg:left-1/2`}>
          <li className={`${homeStyles.content__list} border-t`}>
            <Link href="/profile">
              <a className={`${homeStyles.block} ${homeStyles.content__block} ${homeStyles.profile__block}`}>
                <div className={`${homeStyles.container} ${homeStyles.profile__container}`}>
                  <h2 className={`${homeStyles.content__text} ${homeStyles.profile__text}`}>PROFILE</h2>
                </div>
              </a>
            </Link>
          </li>
          <li className={`${homeStyles.content__list}`}>
            <Link href="/workExpress">
              <a className={`${homeStyles.block} ${homeStyles.content__block} ${homeStyles.workExpress__block}`}>
                <div className={homeStyles.container}>
                  <h2 className={`${homeStyles.content__text} ${homeStyles.workExpress__text}`}>WORK EXPRESS</h2>
                </div>
              </a>
            </Link>
          </li>
          <li className={`${homeStyles.content__list}`}>
            <Link href="/blog">
              <a className={`${homeStyles.block} ${homeStyles.content__block} ${homeStyles.blog__block}`}>
                <div className={homeStyles.container}>
                  <h2 className={`${homeStyles.content__text} ${homeStyles.blog__text}`}>BLOG</h2>
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </main>
    </Layout>
  );
};

export default Home;
