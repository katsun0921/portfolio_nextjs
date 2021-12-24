import type { NextPage } from "next";
import type { ReactElement } from "react";
import styles from "@styles/Home.module.css";
import Layout from "@components/Layout";
import { pageName, pageTitle } from "@constants/page";

const Home: NextPage = (): ReactElement => {
  return (
    <Layout title={pageTitle.home} page={pageName.home}>
      <main className="mx-auto px-4 w-full">
        <div className={styles.name__block}>
          <div className={styles.name__container}>
            <h1 className="text-white">Katsumasa Sato</h1>
          </div>
        </div>
        <div className="transition-all duration-500">
          <div className={styles.about__block}>
            <div className={styles.about__container}>
              <h2>About</h2>
            </div>
          </div>
          <div className={styles.blog__block}>
            <div className={styles.blog__container}>
              <h2>Blog</h2>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
