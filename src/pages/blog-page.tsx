import type { NextPage } from "next";
import type { ReactElement } from "react";
import Link from "next/link";
import Layout from "@components/Layout";
import Post, { IPostProps } from "@components/Post";
import { TServicesParams, getAllServices } from "@lib/api";

const BlogPage: NextPage<{ services: IPostProps[] }> = ({
  services,
}): ReactElement => {
  return (
    <Layout title="Blog">
      <ul>
        <li>
          <Link href="/services/twitter">
            <a>twitter</a>
          </Link>
        </li>
      </ul>
      <ul className="m-10">
        {!!services &&
          services.map((service, i) => {
            service.id = i;

            return <Post key={i} service={service} />;
          })}
      </ul>
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
