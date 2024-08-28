import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import sampleBlogs from "@/config/Sample-blogs";
import React from "react";

interface BlogType {
  slug: string;
  content: string;
  title: string;
  image: string;
}

interface BlogListProps {
  blogs: BlogType[];
}

const truncateContent = (content: string, maxLength: number = 100) =>
  content.length > maxLength
    ? `${content.substring(0, maxLength)}...`
    : content;

const BlogList: React.FC<BlogListProps> = () => {
  return (
    <MaxWidthWrapper className="">
      <div className="min-h-screen  text-gray-900 dark:text-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleBlogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={
                  blog.image
                    ? blog.image
                    : "https://placehold.co/800?text=Hello+World&font=roboto"
                }
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {truncateContent(blog.content)}
                </p>
                <a
                  href={`/blogpost/${blog.slug}`}
                  className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                >
                  <Button>Read More</Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default BlogList;
