import { createContext, useContext, useEffect, useState } from "react";
import { Article } from "../../../components/Article";
import { MarkdownService } from "../../../services/MarkdownService";
import { LocalMarkdownInteractor } from "../../../interactors/LocalMarkdownInteractor";
import { useParams } from "react-router-dom";

const MarkdownServiceContext = createContext<MarkdownService>(
  new LocalMarkdownInteractor()
);

const useMarkdownService = () => useContext(MarkdownServiceContext);

export const ArticlePage = () => {
  const { id } = useParams();
  const markdownService = useMarkdownService();
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    async function fetch() {
      setMarkdown(await markdownService.fetch(id ?? "1"));
    }
    fetch();
  });

  return (
    <div className="container w-75 my-5">
      <Article markdown={markdown} />
    </div>
  );
};
