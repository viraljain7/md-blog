import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import path from "path";
import matter from "gray-matter";
import fs from "fs/promises";

import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

async function page({ params }: { params: { slug: string } }) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify);

  try {
    const filePath = path.join(process.cwd(), "content", `${params.slug}.md`);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const htmlContent = (await processor.process(content)).toString();

    return (
      <MaxWidthWrapper className="prose prose-slate dark:prose-invert">
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      </MaxWidthWrapper>
    );
  } catch (error) {
    console.error("Error loading the file:", error);
    return (
      <MaxWidthWrapper className="">
        <h1>Error</h1>
        <p>Could not load the requested page.</p>
      </MaxWidthWrapper>
    );
  }
}

export default page;
