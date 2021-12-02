import fetch from "node-fetch";
import * as fs from 'fs'
import * as path from 'path'

export type TService = {
  id: number
  text: string
  link: string
  service: string
  date_created: string
  date_unix: number

}

export type TServicesParams = {
  name: string
  lists: TService[]
}

const uri: string = "http://localhost:8081/apis";
const apiUrl = new URL(uri).toString();

export async function getAllServices(): Promise<TServicesParams> {
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }

    return await res.json() as TServicesParams;
  } catch (err) {
    console.error('Error getAllServices: ',err);
    const jsonPath = path.join(process.cwd(), './', 'data', 'all.json')
    const jsonText = fs.readFileSync(jsonPath, 'utf-8')

    return JSON.parse(jsonText) as TServicesParams
  }
}

export async function getAllServiceName(): Promise<{params: {name: string}}[]> {
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }

    const service = await res.json() as TService[];

    return service.map(item => {
      return {
        params: {
          name: String(item.service),
        },
      };
    });
  } catch (err) {
    console.error(err)

    return []
  }
}

export async function getServiceData(name: string): Promise<TServicesParams> {
  try {
    const apiUrl = new URL(`${uri}?service=${name}`).toString();
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }

    const service = await res.json() as TService[];

    return {
      name,
      lists: service,
    };
  } catch (err) {
    console.error(err)

    return {
      name,
      lists: [] as TService[]
    }
  }
}
