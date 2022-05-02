import type {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import { Box, Text } from "@chakra-ui/react";
import type { ProcessedPost } from "@/types";
import {
  getPostFilenames,
  readPostFileContent,
  processMarkdownContent,
} from "postUtils";
import { Layout } from "@/components/layout";

import "highlight.js/styles/github.css";

type StaticPathProps = {
  filename: string;
};
type StaticProps = {
  post: ProcessedPost;
};
type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths: GetStaticPaths<StaticPathProps> = async () => {
  const filenames = await getPostFilenames();

  return {
    paths: filenames.map((filename) => ({
      params: { filename },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  StaticProps,
  StaticPathProps
> = async ({ params }) => {
  const post = await readPostFileContent(params?.filename!);
  const content = await processMarkdownContent(post.rawContent);
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

const PostPage: NextPage<Props> = ({ post: { metadata, content } }) => {
  return (
    <Layout title={metadata.title}>
      <Box pt="10px">
        {metadata.createdAt && <Text>作成日: {metadata.createdAt}</Text>}
        {metadata.updatedAt && <Text>更新日: {metadata.updatedAt}</Text>}
      </Box>
      <article
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <style jsx>{`
        article :global(h2) {
          font-size: 22px;
          font-weight: bold;
          margin: 20px 0 12px 0;
        }
        article :global(p) {
          margin: 10px 0;
        }
        article :global(ul) {
          margin-left: 1em;
        }
        article :global(ul) > :global(li) > :global(ul) {
          margin-left: 1em;
        }
        article :global(pre) {
          border: 1px solid;
        }
        article :global(blockquote) {
          border-left: 4px solid;
        }
        article :global(blockquote) :global(p) {
          color: lightgray;
          padding-left: 1em;
        }
        article :global(a) {
          color: #0969da;
        }
        article :global(a):hover {
          text-decoration: underline;
        }
      `}</style>
    </Layout>
  );
};

export default PostPage;
