export type Post = {
  filename: string;
  metadata: PostMetadata;
  rawContent: string;
};

export type ProcessedPost = Post & {
  content: string;
};

export type PostMetadata = {
  title: string;
  createdAt: string;
  updatedAt?: string;
  tags: string[];
};
