import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeToc, { HtmlElementNode } from "@jsdevtools/rehype-toc";
import rehypeExternalLinks from "rehype-external-links";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import { Node } from "unist";
import { PostMetadata } from "./types";

const postsDir = path.join(process.cwd(), "_posts");

// 全てのPostファイル名を取得する
export const getPostFilenames = async () => {
  const filenames = await fs.readdir(postsDir);
  return filenames;
};

// 渡されたPostファイルを読み込み、メタデータとコンテンツに分離する
export const readPostFileContent = async (filename: string) => {
  const file = await fs.readFile(path.join(postsDir, filename), "utf8");
  const { data, content } = matter(file);
  return {
    filename,
    metadata: data as PostMetadata,
    rawContent: content,
  };
};

// 渡された全てのPostファイルを読み込み、メタデータとコンテンツに分離する
export const readPostFileContents = async (filenames: string[]) => {
  const fileContents = await Promise.all(
    filenames.map(async (filename) => await readPostFileContent(filename))
  );
  return fileContents;
};

// MarkdownのテキストデータをHTMLのテキストデータに変換する
export const processMarkdownContent = async (rawContent: string) => {
  const vfile = await unified()
    .use(remarkParse)
    .use(remarkBreaks)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeToc, {
      customizeTOC: (toc) => {
        toc.tagName = "div";
        toc.children?.forEach((child) => {
          (child as unknown as HtmlElementNode).tagName = "ul";
        });
        toc.children?.unshift({
          type: "element",
          tagName: "h2",
          children: [
            {
              type: "text",
              value: "Table of Contents",
            },
          ],
        } as Node);
        return toc;
      },
    })
    .use(rehypeExternalLinks)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(rawContent);
  return vfile.toString();
};
