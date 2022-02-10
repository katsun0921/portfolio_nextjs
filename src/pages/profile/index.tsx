import type { NextPage } from "next";
import type { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@components/Layout";
import { HeadingPrimary, HeadingSecondary } from "@components/Heading";
import Content from "@components/Content";
import { TServicesParams, getAllServices } from "@lib/api";
import { contentName } from "@constants/content";
import profileStyles from "@styles/pages/profile.module.css";

const ProfilePage: NextPage = (): ReactElement => {
  return (
    <Layout title="Profile" page="profile">
      <Content page="profile">
        <section>
          <HeadingPrimary text={contentName.profile.heading} level="1" />
          <p className="mt-6">
            プログラムでのUI/UXデザインを得意としています。html,cssのデザインレイアウトとJavaScriptを使用しての動的な動きも作成することができます。そのほかにもプログラムだけではなく、学校でデザインを学んでいたこともあり、レイアウトデザインスキルもあります。
            <br />
            また作るだけではなく、ディレクターや顧客の担当者とのサイトの取り決めなどのディレクションも行っておりました。
          </p>
          <p>
            趣味の映画鑑賞は、470以上の作品を鑑賞しており、鑑賞した作品にはレビューを投稿を行っております。
          </p>
          <Link href="https://filmarks.com/users/katsun" passHref>
            <a className="mb-6" target="_blank" rel="noopener noreferrer">
              https://filmarks.com/users/katsun
            </a>
          </Link>
        </section>
        <section className="mt-6">
          <HeadingPrimary text="My Skill Set" level="2" />
          <dl className="my-6 p-2 border border-solid border-line-primary-color">
            <dt className="font-bold">
              プログラミングのレベル別に、どの程度の習熟度なのかまとめました。
            </dt>
            <dd>
              <ul>
                <li className="flex">
                  5
                  <div className={profileStyles.skillSetListText}>
                    Elite:リーダーとして開発できる
                  </div>
                </li>
                <li className="flex">
                  4
                  <div className={profileStyles.skillSetListText}>
                    Advanced: 上流工程の仕事も担当できる
                  </div>
                </li>
                <li className="flex">
                  3
                  <div className={profileStyles.skillSetListText}>
                    Intermediate: 業務経験が1年以上ある
                  </div>
                </li>
                <li className="flex">
                  2
                  <div className={profileStyles.skillSetListText}>
                    Novice: 個人開発で簡単なアプリ開発ができる
                  </div>
                </li>
                <li className="flex">
                  1
                  <div className={profileStyles.skillSetListText}>
                    Beginner: 文法を勉強中
                  </div>
                </li>
              </ul>
            </dd>
          </dl>
          <HeadingSecondary text="Front End" level="3" icon="frontend" />
          <ol className="flex border-b border-solid border-black h-3 mt-6">
            <li className={`${profileStyles.skillSetListGraph} border-l`}>
              <span className={profileStyles.skillSetListValue}>1</span>
            </li>
            <li className={profileStyles.skillSetListGraph}>
              <span className={profileStyles.skillSetListValue}>2</span>
            </li>
            <li className={profileStyles.skillSetListGraph}>
              <span className={profileStyles.skillSetListValue}>3</span>
            </li>
            <li className={profileStyles.skillSetListGraph}>
              <span className={profileStyles.skillSetListValue}>4</span>
            </li>
            <li className={profileStyles.skillSetListGraph}>
              <span className={profileStyles.skillSetListValue}>5</span>
            </li>
          </ol>
          <dl className="mt-2">
            <dt>HTML/CSS</dt>
            <dd
              className={`mt-1 w-5/5 text-center text-white drop-shadow ${profileStyles.skillSetListBar} ${profileStyles.html_css}`}
            >
              5
            </dd>
          </dl>
        </section>
        <section className="mt-6">
          <HeadingPrimary text="Work" level="2" />
          <ul>
            <li>
              <Link href="https://katsumascore.blog" passHref>
                <a
                  className="block mt-6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="w-full"
                    src="/image/katsumascore.jpg"
                    alt="KatsumaScore"
                    width={690}
                    height={460}
                  />
                  個人で作成した映画レビュー投稿サイトとなります。Wordpress
                  で作成しています。
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://youtu.be/vTjW6Iiy9IE" passHref>
                <a
                  className="block mt-6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="w-full"
                    src="/image/3dcg.jpg"
                    alt="KatsumaScore"
                    width={690}
                    height={460}
                  />
                  大学生に専攻していた3DCGを駆使した3DCGアニメーションになります。3dsMAXでモデルを作成し、After
                  Effectsを使用し動画を作成しました。
                  <em className="block">youtubeへリンクします。</em>
                </a>
              </Link>
              <Link
                href="https://s3.ks-portfolio.site/public/pdf/portfolio_72dpi.pdf"
                passHref
              >
                <a
                  className="block mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  作品集
                  <em className="block">
                    PDFファイルが開きます。（pdf: 115.8 MB）
                  </em>
                </a>
              </Link>
            </li>
          </ul>
        </section>
      </Content>
    </Layout>
  );
};

export default ProfilePage;

export const getStaticProps = async (): Promise<{
  props: { services: TServicesParams };
}> => {
  const services = await getAllServices();

  return {
    props: { services },
  };
};
