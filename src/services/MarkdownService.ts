export interface MarkdownService {
  fetch(id: string): Promise<string>;
}
