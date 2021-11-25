import fetch from "node-fetch";

const uri: string = "http://localhost:8081/apis";
const apiUrl = new URL(uri).toString();


export async function getAllPostsData() {
  const res = await fetch(apiUrl);
  return await res.json()
}
