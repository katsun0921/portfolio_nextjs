import Image from "next/image";
import Link from "next/link";

import {
  Layout,
  HeadingPrimary,
  HeadingSecondary,
  Content,
} from "@components/_Index";
import { contentName } from "@constants/content";
import { TSkills, getSkillsData } from "@libs/apis/profile";
import profileStyles from "@styles/pages/Profile.module.css";

import type { NextPage } from "next";
import type { ReactElement } from "react";

const ProfilePage: NextPage<{ skills: [TSkills] }> = ({
  skills,
}): ReactElement => {
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
          {skills.map((skill: TSkills) => {
            const maxLevel = 5;
            const skillLists = [];
            for (let i = 1; i <= maxLevel; i++) {
              skillLists.push(
                <li
                  key={i}
                  className={`${profileStyles.skillSetListGraph} border-l`}
                >
                  <span className={profileStyles.skillSetListValue}>{i}</span>
                </li>,
              );
            }

            return (
              <div key={skill.id} className="mb-6">
                <HeadingSecondary text={skill.job} level="3" icon="frontend" />
                <ol className="flex border-b border-solid border-black h-3 mt-6">
                  {skillLists}
                </ol>
                {skill.skills.map((programming, i) => {
                  const { level } = programming;
                  const widthValue = (Number(level) / maxLevel) * 100;

                  return (
                    <dl key={i} className="mt-2">
                      <dt>{programming.language}</dt>
                      <dd
                        className={`mt-1 w-5/5 text-center text-white drop-shadow ${profileStyles.skillSetListBar} ${profileStyles.htmlCss}`}
                        style={{ width: `${widthValue}%` }}
                      >
                        {programming.level}
                      </dd>
                    </dl>
                  );
                })}
              </div>
            );
          })}
        </section>
        <section>
          <HeadingPrimary text="Works" level="2" />
          <ul className="lg:flex mt-6">
            <li className="w-full lg:w-1/2 lg:pr-2">
              <Link href="https://katsumascore.blog" passHref>
                <a className="block" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="w-full"
                    src="/image/katsumascore.jpg"
                    alt="KatsumaScore"
                    width={690}
                    height={460}
                  />
                  <p>
                    個人で作成した映画レビュー投稿サイトとなります。Wordpress
                    で作成しています。
                  </p>
                </a>
              </Link>
            </li>
            <li className="w-full lg:w-1/2 lg:pl-2 mt-6 lg:mt-0">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/vTjW6Iiy9IE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>
                大学生に専攻していた3DCGを駆使した3DCGアニメーションになります。3dsMAXでモデルを作成し、After
                Effectsを使用し動画を作成しました。
                <em className="block">youtubeへリンクします。</em>
              </p>
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
  props: { skills: [TSkills] };
}> => {
  const skills = await getSkillsData();

  return {
    props: { skills },
  };
};
