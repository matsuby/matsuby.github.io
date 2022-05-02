import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { Heading, List, ListItem } from "@chakra-ui/react";
import type { Post } from "@/types";
import { readPostFileContents, getPostFilenames } from "postUtils";
import { Layout } from "@/components/layout";
import { Link } from "@/components/link";

type StaticProps = {
  posts: Post[];
};
type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const filenames = await getPostFilenames();
  const posts = await readPostFileContents(filenames);
  return { props: { posts } };
};

const TopPage: NextPage<Props> = ({ posts }) => {
  return (
    <Layout title="Posts">
      <List p="20px">
        {posts.map((post) => (
          <Link key={post.filename} href={`/posts/${post.filename}`}>
            <ListItem>
              {post.metadata.createdAt}
              <Heading as="h2" size="md">
                {post.metadata.title}
              </Heading>
            </ListItem>
          </Link>
        ))}
      </List>
    </Layout>
  );
};

export default TopPage;
