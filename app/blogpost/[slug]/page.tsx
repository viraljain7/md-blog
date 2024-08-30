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
import OnThisPage from "@/components/OnThisPage";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";

async function page({ params }: { params: { slug: string } }) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: "monokai",
      keepBackground: false,
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeAutolinkHeadings);

  try {
    const filePath = path.join(process.cwd(), "content", `${params.slug}.md`);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const htmlContent = (await processor.process(content)).toString();

    return (
      <MaxWidthWrapper className="prose prose-slate dark:prose-invert">
        <div className="flex">
          <div className="w-full md:w-3/4 px-10">
            <h1>{data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
          </div>
          <div className="hidden md:block md:w-1/4 sticky top-5 self-start">
            <OnThisPage className="text-md" htmlContent={htmlContent} />
          </div>
        </div>
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
