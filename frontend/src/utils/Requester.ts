import Axios, { AxiosError } from 'axios';
import { Point } from "core/types";
import { PicData } from "./Responses";

const apiClient = Axios.create({});

const urls = {
  pic: "/api/copernicus/pic"
};

function isAxiosError(err: AxiosError | unknown): err is AxiosError {
  return (err as AxiosError).response !== undefined;
}

function handleError(err: AxiosError | unknown, url: string): void {
  if (isAxiosError(err)) {
    console.error(
      "Endpoint: '",
      url,
      "' returned an error\nMessage: ",
      err.message,
    );
  }
}

async function get<T, B>(url: string, params: B): Promise<T> {
  const response = await apiClient
    .get<T>(url, { params })
    .catch((err: AxiosError | unknown) => {
      handleError(err, url);
      throw err;
    });
  return response.data;
}

async function post<T, B>(url: string, params: B): Promise<T> {
  const response = await apiClient
    .post<T>(url, params)
    .catch((err: AxiosError | unknown) => {
      handleError(err, url);
      throw err;
    });
  return response.data;
}

class Requester {

  registered401Cb: () => void;

  authHeader: { Authorization: string };

  constructor() {
    this.authHeader = { Authorization: '' };
    this.registered401Cb = () => { };
  }

  setAuthHeader = (token: string): void => {
    this.authHeader = { Authorization: `Bearer ${token}` };
  };

  // What to do if a request gets 401 -> call a callback
  registerAuthFail = (callback: () => void): void => {
    this.registered401Cb = callback;
  };

  getPicture = (p1: Point, p2: Point, p3: Point, p4: Point): Promise<PicData> => post(urls.pic, {
    p1, p2, p3, p4
  });

}

const requesterInstance = new Requester();
export { requesterInstance as Requester };
