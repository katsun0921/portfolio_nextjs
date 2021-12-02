// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextPage, NextComponentType } from "next";
import Link from "next/link";
import Layout from "@components/Layout";
import { TService,TServicesParams, getAllServiceName, getServiceData } from "@lib/api"
import { ReactElement } from "react";
import Post from "@components/Post";

type Service = {
  name: string
  service: [Service]
}

interface IPaths {
  paths: {params: {name: string}}[],
  fallback: Boolean
}

type TParams = {
  params: {
    name: string
  }
}
interface IProps {
  props: {
    name: string
    service: TService[]
  }
}

export default function Service ({name, service }: TServicesParams): ReactElement {
  if (!service) {
    return <div>Loading...</div>
  }

  return (
    <Layout title={name}>
      <Link href="/blog-page" passHref>
        <div className="flex cursor-pointer mt-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-3"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd" />
          </svg>
          <span>Back to blog-page</span>
        </div>
      </Link>
      <ul className="m-10">
        {!!service && service.map((article, i) => {
            article.id = i

            return <Post key={i} service={article} />
          }
        )}
      </ul>
    </Layout>
  );
}

export async function getStaticPaths (): Promise<IPaths> {
  const paths = await getAllServiceName()

  return  {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params } : TParams): Promise<IProps> {
  const {service, name} = await getServiceData(params.name);

  return {
    props: {
      name,
      service
    }
  };
}
