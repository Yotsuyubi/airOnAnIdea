import { MarkdownService } from "../services/MarkdownService";
import axios from "axios";

export class LocalMarkdownInteractor implements MarkdownService {
  async fetch(id: string): Promise<string> {
    const resp = await axios.get(`/_markdown/${id}.md`);
    return resp.data as string;
  }
}
