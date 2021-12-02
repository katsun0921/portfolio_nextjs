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
  service: TService[]
}

export interface IServicesParams {
  name: string;
  service: TServicesParams;
}

const uri: string = "http://localhost:8081/apis";
const apiUrl = new URL(uri).toString();

//TODO: 返り値を設定する
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

//TODO: 返り値を設定する
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
      service,
    };
  } catch (err) {
    console.error(err)
    return {
      name,
      service: [] as TService[]
    }
  }
}
