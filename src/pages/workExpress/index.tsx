import { Layout, HeadingPrimary, Content } from "@components/_Index";
import { contentName } from "@constants/content";
import { TWorkExpress, getWorkExpressData } from "@libs/apis/workExpress";
import workExpressStyles from "@styles/pages/WorkExpress.module.css";

import type { NextPage } from "next";
import type { ReactElement } from "react";

const WorkExpressPage: NextPage<{ posts: [TWorkExpress] }> = ({
  posts,
}): ReactElement => {
  return (
    <Layout title="Work Express" page="workExpress">
      <Content page="workExpress">
        <section>
          <HeadingPrimary text={contentName.workExpress.heading} level="1" />
          <p className="mt-6">
            これまでキャリアを最新のものから時系列に載せています。
          </p>
        </section>
        <section className={`mt-6 ${workExpressStyles.listWrap}`}>
          <ol
            className={`border-b border-dashed border-black border-opacity-50 relative lg:ml-20 ${workExpressStyles.listBlock}`}
          >
            {posts.map((post: TWorkExpress) => (
              <li key={post.id} className="pt-6 pb-4">
                <h2
                  className={`font-bold relative ${workExpressStyles.listHeading}`}
                >
                  {post.project}
                  <span className="font-normal text-xs text-gray-400">
                    1年間
                  </span>
                  <span
                    className={`mt-1 font-normal block text-xs text-gray-400 ${workExpressStyles.listDurationContainer}`}
                  >
                    <span
                      className={`relative lg:pb-2 ${workExpressStyles.listDuration}`}
                    >
                      {post.start_date}
                    </span>
                    <span>{post.end_date}</span>
                  </span>
                </h2>
                <h3 className="mt-2">{post.job_type}</h3>
                <p className="mt-1">{post.description}</p>
                <dl className="mt-2">
                  <dt>使用スキル</dt>
                  <dd>
                    <ul className="list-disc pl-4">
                      {post.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </dd>
                </dl>
              </li>
            ))}
          </ol>
        </section>
      </Content>
    </Layout>
  );
};

export default WorkExpressPage;

export const getStaticProps = async (): Promise<{
  props: { posts: [TWorkExpress] };
}> => {
  const posts = await getWorkExpressData();

  return {
    props: { posts },
  };
};
