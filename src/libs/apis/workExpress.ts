import * as fs from "fs";
import * as path from "path";

import fetch from "node-fetch";

import { uri } from "@constants/domain";

export type TWorkExpress = {
  id: string;
  company: string;
  project: string;
  job_type: string;
  start_date: string;
  end_date: string;
  description: string;
  skills: [string];
};

const apiUrl = new URL(uri.prod).toString();

export async function getWorkExpressData(): Promise<[TWorkExpress]> {
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }

    return (await res.json()) as [TWorkExpress];
  } catch (err) {
    console.error("Error getWorkExpress: ", err);
    const jsonPath = path.join(process.cwd(), "./", "data", "workExpress.json");
    const jsonText = fs.readFileSync(jsonPath, "utf-8");

    return JSON.parse(jsonText) as [TWorkExpress];
  }
}
