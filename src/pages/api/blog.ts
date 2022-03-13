import fetch from "node-fetch";

import { uri } from "@constants/domain";
import testBlogData from "@data/blogs.json";

export type TBlog = {
  id: string;
  text: string;
  link: string;
  service: string;
  date_created: string;
  date_unix: number;
};

export interface IBlog {
  id: string;
  text: string;
  link: string;
  service: string;
  date_created: string;
  date_unix: number;
}

export async function getBlogsData(service = ""): Promise<TBlog[]> {
  try {
    const query = !!service ? service : "all";

    const res = await fetch(`${uri.prod}blog?service=${query}`);
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }

    return (await res.json()) as TBlog[];
  } catch (err) {
    console.error("Error getBlogData: ", err);

    return testBlogData as TBlog[];
  }
}
