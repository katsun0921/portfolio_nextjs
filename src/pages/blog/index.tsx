import Link from "next/link";
import { useState, useEffect } from "react";
import useSWR, { SWRResponse } from "swr";

import { Layout, HeadingPrimary, Content } from "@components/_Index";
import { contentName } from "@constants/content";
import { uri } from "@constants/domain";
import testBlogData from "@data/blogs.json";
import { TBlog, getBlogsData } from "@pages/api/blog";
import blogStyles from "@styles/pages/Blog.module.css";
import { omittedText } from "@utils/index";

import type { NextPage, GetStaticProps } from "next";
import type { ReactElement } from "react";

const apiBlogDomain = `${uri.prod}blogs`;

const fetcher = async (
  url: string,
  query: { [service: string]: string },
): Promise<TBlog[]> => {
  if (!!query) {
    url += "?";

    for (const key of Object.keys(query)) {
      url += `${key}=${query[key]}&`;
    }
  }

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Reason ${res.status} ${res.statusText}`);
    }

    return (await res.json()) as TBlog[];
  } catch (err) {
    console.error("Error feather: ", err);

    return testBlogData as TBlog[];
  }
};

const useBlogDataSWR = (fallbackData: TBlog[]): SWRResponse<any, any> => {
  return useSWR(apiBlogDomain, fetcher, { fallbackData });
};

const BlogPage: NextPage<{ fallbackData: TBlog[] }> = ({
  fallbackData,
}): ReactElement => {
  const pageType: string = "blog";

  const { data, mutate } = useBlogDataSWR(fallbackData);
  const [state, setState] = useState({ type: "all" });

  const handleChangeBlogType = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (e !== null && e.target instanceof HTMLElement) {
      const element = e.target;
      const dataType = !!element.dataset.type ? element.dataset.type : "";
      setState((prevState) => ({
        ...prevState,
        type: !!dataType ? dataType : "all",
      }));

      const query = {
        service: dataType,
      };

      const newData = await fetcher(apiBlogDomain, query);
      // データを更新（mutate）
      mutate(newData).catch((error) => {
        throw error;
      });
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
            {!!data ? (
              data.map((blog, i) => {
                return (
                  <li
                    key={i}
                    className={`w-full px-4 pt-4 pb-6 mt-4  ${blogStyles.articleBlock}`}
                  >
                    <h2 className={`mb-5 ${blogStyles.articleHeading}`}>
                      <span
                        className={`block text-center mx-auto leading-6 rounded-xl w-24 h-6 text-white text-base ${blogStyles.twitter}`}
                      >
                        {blog.service}
                      </span>
                      <span className="block text-center text-base">
                        {blog.date_created}
                      </span>
                      <span
                        className={`block mt-2 mx-auto w-24 h-px ${blogStyles.twitter}`}
                      ></span>
                    </h2>
                    <p className="px-4 mb-5">{omittedText(blog.text, 100)}</p>
                    <Link href={blog.link} passHref>
                      <a
                        className={`block text-center mx-auto rounded ${blogStyles.articleReadmore}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        READ MORE
                      </a>
                    </Link>
                  </li>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </ul>
        </section>
      </Content>
    </Layout>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: { fallbackData: TBlog[] };
}> => {
  const blogData = await fetcher(apiBlogDomain, { service: "zenn" });

  return {
    props: { fallbackData: blogData },
  };
};
