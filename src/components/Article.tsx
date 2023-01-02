import React from "react";
import { Title } from "./Title";
import ReactMarkdown from "react-markdown";
import { Section } from "./Section";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";

type ArticleProps = {
  markdown: string;
};

const Strong = styled.strong`
  color: #e94560;
`;

const Paragraph = styled.p`
  color: aliceblue;
  font-family: "ubuntu";
  font-size: 1.2rem;
`;

const ListItem = styled.li`
  color: aliceblue;
  font-family: "ubuntu";
  font-size: 1.2rem;
`;

const HyperLink = styled.a`
  color: #e94560;
  font-family: "ubuntu";
`;

const H3 = styled.h3`
  color: aliceblue;
  font-family: "ubuntu";
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Article: React.FC<ArticleProps> = (props) => (
  <article>
    <ReactMarkdown
      children={props.markdown}
      components={{
        h1: ({ node, ...props }) => <Title {...props} />,
        h2: ({ node, ...props }) => <Section {...props} />,
        h3: ({ node, ...props }) => <H3 {...props} />,
        strong: ({ node, ...props }) => <Strong {...props} />,
        p: ({ node, ...props }) => <Paragraph {...props} />,
        li: ({ node, ...props }) => <ListItem {...props} />,
        code({ node, inline, className, children, style, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={dracula}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        a: ({ node, ...props }) => <HyperLink {...props} />,
      }}
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
    />
  </article>
);
