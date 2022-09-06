import axios from "axios";
import { HttpAdapter } from "../interfaces/httpAdapter.interface";
export class PokeApiAdapter implements HttpAdapter {
  private readonly axios = axios;

  async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get(url);
    return data;
  }

  async post(url: string, data: any) {}
  async patch(url: string, data: any) {}
  async delete(url: string) {}
}

export class PokeApiAdapterFetch implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    const data: T = await (await fetch(url)).json();
    return data;
  }
}
