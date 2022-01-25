import type { NextPage } from "next";
import Link from "next/link";
import type { ReactElement } from "react";
import styles from "@styles/home.module.css";
import Layout from "@components/Layout";
import { pageName, pageTitle } from "@constants/page";

const Home: NextPage = (): ReactElement => {
  return (
    <Layout title={pageTitle.home} page={pageName.home}>
      <main className="mx-auto px-4 w-full">
        <div
          className={`${styles.name_block} ${styles.home_block} top-1/2 left-1/2`}
        >
          <div className={`${styles.home_container}`}>
            <h1 className="">Katsumasa Sato</h1>
          </div>
        </div>
        <div className={`${styles.contents} absolute left-1/2`}>
          <Link href="/about-page">
            <a
              className={`${styles.home_block} ${styles.content_block} ${styles.about_block}`}
            >
              <div
                className={`${styles.home_container} ${styles.about_container}`}
              >
                <h2>About</h2>
              </div>
            </a>
          </Link>
          <Link href="/blog-page">
            <a
              className={`${styles.home_block} ${styles.content_block} ${styles.blog_block}`}
            >
              <div className={styles.home_container}>
                <h2>Blog</h2>
              </div>
            </a>
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
