import fetch from "node-fetch";

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

const uri: string = "http://localhost:8081/apis";
const apiUrl = new URL(uri).toString();

export async function getBlogsData(service = ""): Promise<TBlog[]> {
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }

    return (await res.json()) as TBlog[];
  } catch (err) {
    console.error("Error getBlogData: ", err);

    return testBlogData as TBlog[];
  }
}
