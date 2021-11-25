import type { NextPage } from "next";

type Props = {
  id?: Number
  text?: String
}

const Post: NextPage<{post: Props }> = ({ post }) => {

  return (
    <li>
      <span>{post.id}</span>
      { ": " }
      <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">{post.text}</span>
    </li>
  )
}

export default Post
