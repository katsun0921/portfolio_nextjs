import fetch from "node-fetch";

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
export async function getAllServices() {
  const res = await fetch(apiUrl);
  return await res.json() as TServicesParams;
}

//TODO: 返り値を設定する
export async function getAllServiceName() {
  const res = await fetch(apiUrl);
  const service = await res.json() as TService[];

  return service.map(item => {
    return {
      params: {
        name: String(item.service),
      },
    };
  });
}

export async function getServiceData(name: string): Promise<IServicesParams> {
  const apiUrl = new URL(`${uri}?service=${name}`).toString();
  const res = await fetch(apiUrl);
  const service = await res.json() as TServicesParams;

  return {
    name,
    service,
  };
}
