import type { NextPage } from "next";
import type { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Layout,
  HeadingPrimary,
  HeadingSecondary,
  Content,
} from "@components/Index";
import { TServicesParams, getAllServices } from "@lib/api";
import { contentName } from "@constants/content";
import workExpressStyles from "@styles/pages/workexpress.module.css";

const WorkExpressPage: NextPage = (): ReactElement => {
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
            <li className="pt-6 pb-4">
              <h2
                className={`font-bold relative ${workExpressStyles.listHeading}`}
              >
                株式会社ネクスト
                <span className="font-normal text-xs text-gray-400">1年間</span>
                <span
                  className={`mt-1 font-normal block text-xs text-gray-400 ${workExpressStyles.listDurationContainer}`}
                >
                  <span
                    className={`relative lg:pb-2 ${workExpressStyles.listDuration}`}
                  >
                    2020年2月
                  </span>
                  <span>現在</span>
                </span>
              </h2>
              <h3 className="mt-2">フロントエンドエンジニア</h3>
              <p className="mt-1">
                不動産情報サイトを扱っている某大手企業で、コーディング業務PCサイト、SPサイトデザイン、テスト仕様書の作成。
                <br />
                PHPフレームワーク Symfonyを使用してUIデザインレイアウト。
              </p>
              <dl className="mt-2">
                <dt>使用スキル</dt>
                <dd>
                  <ul className="list-disc pl-4">
                    <li>PHP</li>
                    <li>html (twig Symfonyのtwig)</li>
                    <li>JavaScripts</li>
                    <li>Sass</li>
                  </ul>
                </dd>
              </dl>
            </li>
          </ol>
        </section>
      </Content>
    </Layout>
  );
};

export default WorkExpressPage;

export const getStaticProps = async (): Promise<{
  props: { services: TServicesParams };
}> => {
  const services = await getAllServices();

  return {
    props: { services },
  };
};
