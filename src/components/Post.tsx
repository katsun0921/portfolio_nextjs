import Link from "next/link";

import type { NextPage } from "next";
import type { ReactElement } from "react";

interface IPostProps {
  id: number;
  text: string;
  link: string;
}

const Post: NextPage<{ service: IPostProps }> = ({ service }): ReactElement => {
  return (
    <li>
      <span>{service.id}</span>
      {": "}
      <Link href={`${service.link}`}>
        <a className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200" target="_blank" rel="noopener noreferrer">
          {service.text}
        </a>
      </Link>
    </li>
  );
};

export default Post;
