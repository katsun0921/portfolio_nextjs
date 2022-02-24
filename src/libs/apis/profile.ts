import * as fs from "fs";
import * as path from "path";

import fetch from "node-fetch";

import { uri } from "@constants/domain";

export type TSkills = {
  id: string;
  job: string;
  skills: [
    {
      language: string;
      level: string;
    },
  ];
};

export async function getSkillsData(): Promise<[TSkills]> {
  try {
    const res = await fetch(`${uri.prod}skills`);
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }

    return (await res.json()) as [TSkills];
  } catch (err) {
    console.error("Error getSkills: ", err);
    const jsonPath = path.join(process.cwd(), "./", "data", "skills.json");
    const jsonText = fs.readFileSync(jsonPath, "utf-8");

    return JSON.parse(jsonText) as [TSkills];
  }
}
