import type { NextPage } from "next";
import Layout from "../components/Layout"
import Post from "../components/Post"
import { getAllPostsData } from "../lib/api"

type PostProps = {
  id?: number,
  post?: object
}

const blogPage: NextPage<{ posts: PostProps[] }> = ({ posts }) => {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {!!posts && posts.map((post, i) => {
          post.id = i
          return <Post key={i} post={post} />
          }
        )}
      </ul>
    </Layout>
  );
};

export default blogPage;

export const getStaticProps =  async () => {
  const posts = await getAllPostsData()
  return {
    props: { posts }
  }
}
