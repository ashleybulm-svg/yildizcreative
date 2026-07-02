declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const frontmatter: {
    title: string;
    description: string;
    date: string;
    slug: string;
    category: string;
    image: string;
    readingTime?: string;
  };

  const MDXContent: ComponentType<{ components?: Record<string, ComponentType> }>;
  export default MDXContent;
}
