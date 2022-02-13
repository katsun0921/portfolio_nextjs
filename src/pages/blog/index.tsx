import type { NextPage } from "next";
import type { ReactElement } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Layout, HeadingPrimary, Content } from "@components/_Index";
import { TServicesParams, getAllServices } from "@lib/api";
import { contentName } from "@constants/content";
import blogStyles from "@styles/pages/Blog.module.css";

const BlogPage: NextPage = (): ReactElement => {
  const pageType: string = "blog";
  const [state, setState] = useState({ type: "all" });
  const handleChangeBlogType = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    if (event !== null && event.target instanceof HTMLElement) {
      const element = event.target;
      setState((prevState) => ({
        ...prevState,
        type: !!element.dataset.type ? element.dataset.type : "all",
      }));
    }
  };

  useEffect(() => {
    const buttonLists: NodeListOf<Element> =
      document.querySelectorAll(".js-button-list");
    buttonLists.forEach((list) => {
      const button = list.querySelector("button");
      if (!!button) {
        const blogType = button.dataset.type;
        if (!!blogType && blogType === state.type) {
          button.classList.add(blogStyles.buttonActive);
        } else {
          button.classList.remove(blogStyles.buttonActive);
        }
      }
    });
  });

  return (
    <Layout title="Blog" page={pageType}>
      <Content page={pageType}>
        <section>
          <HeadingPrimary text={contentName[pageType].heading} level="1" />
          <ul className="flex justify-center mt-4 mb-2 text-black lg:justify-start">
            <li className="mr-2 js-button-list">
              <button
                data-type="twitter"
                onClick={handleChangeBlogType}
                className={`${blogStyles.button} text-center`}
              >
                Twitter
              </button>
            </li>
            <li className="mr-2 js-button-list">
              <button
                data-type="zenn"
                onClick={handleChangeBlogType}
                className={`${blogStyles.button} text-center`}
              >
                Zenn
              </button>
            </li>
            <li className="mr-2 js-button-list">
              <button
                data-type="all"
                onClick={handleChangeBlogType}
                className={`${blogStyles.button} text-center`}
              >
                All
              </button>
            </li>
          </ul>
          <ul className="lg:flex lg:flex-wrap lg:gap-8 lg:justify-center">
            <li
              className={`w-full px-4 pt-4 pb-6 mt-4  ${blogStyles.articleBlock}`}
            >
              <h2 className={`mb-5 ${blogStyles.articleHeading}`}>
                <span
                  className={`block text-center mx-auto leading-6 rounded-xl w-24 h-6 text-white text-base ${blogStyles.twitter}`}
                >
                  twitter
                </span>
                <span className="block text-center font-bold mt-2 mx-auto">
                  Blog Title
                </span>
                <span className="block text-center text-base">yyyy/mm/dd</span>
                <span
                  className={`block mt-2 mx-auto w-24 h-px ${blogStyles.twitter}`}
                ></span>
              </h2>
              <p className="px-4 mb-5">
                blog テキストblog テキストblog テキストblog テキストblog
                テキストblog テキストblog テキストblog テキストblog テキストblog
                テキストblog テキストblog テキストblog テキストblog テキストblog
                テキストblog テキストblog テキストblog テキストblog テキストblog
                テキストblog テキスト
              </p>
              <Link href="/" passHref>
                <a
                  className={`block text-center mx-auto rounded ${blogStyles.articleReadmore}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  READ MORE
                </a>
              </Link>
            </li>
            <li
              className={`w-full px-4 pt-4 pb-6 mt-4 ${blogStyles.articleBlock}`}
            >
              <h2 className={`mb-5 ${blogStyles.articleHeading}`}>
                <span
                  className={`block text-center mx-auto leading-6 rounded-xl w-24 h-6 text-white text-base ${blogStyles.zenn}`}
                >
                  zenn
                </span>
                <span className="block text-center font-bold mt-2 mx-auto">
                  Blog Title
                </span>
                <span className="block text-center text-base">yyyy/mm/dd</span>
                <span
                  className={`block mt-2 mx-auto w-24 h-px ${blogStyles.zenn}`}
                ></span>
              </h2>
              <p className="px-4 mb-5">
                blog テキストblog テキストblog テキストblog テキストblog
                テキストblog テキストblog テキストblog テキストblog テキストblog
                テキストblog テキストblog テキストblog テキストblog テキストblog
                テキストblog テキストblog テキストblog テキストblog テキストblog
                テキストblog テキスト
              </p>
              <Link href="/" passHref>
                <a
                  className={`block text-center mx-auto rounded ${blogStyles.articleReadmore}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  READ MORE
                </a>
              </Link>
            </li>
          </ul>
        </section>
      </Content>
    </Layout>
  );
};

export default BlogPage;

export const getStaticProps = async (): Promise<{
  props: { services: TServicesParams };
}> => {
  const services = await getAllServices();

  return {
    props: { services },
  };
};
