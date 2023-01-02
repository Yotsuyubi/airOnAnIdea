import { MarkdownService } from "../services/MarkdownService";
import axios from "axios";

const BASE_URL = process.env.PUBLIC_URL;

export class LocalMarkdownInteractor implements MarkdownService {
  async fetch(id: string): Promise<string> {
    const resp = await axios.get(`${BASE_URL}/_markdown/${id}.md`);
    return resp.data as string;
  }
}
