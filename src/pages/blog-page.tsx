import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@components/Layout"
import Post from "@components/Post"
import { getAllServices } from "@lib/api"

type ServiceProps = {
  id?: number,
  service?: object
}

const blogPage: NextPage<{ services: ServiceProps[] }> = ({ services }) => {
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
        {!!services && services.map((service, i) => {
          service.id = i

          return <Post key={i} service={service} />
          }
        )}
      </ul>
    </Layout>
  );
};

export default blogPage;

export const getStaticProps =  async () => {
  const services = await getAllServices()

  return {
    props: { services }
  }
}
