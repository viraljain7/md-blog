"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

interface linkType {
  id: string;
  text: string;
}
function OnThisPage({
  htmlContent,
  className,
}: {
  htmlContent: string;
  className: string;
}) {
  const [links, setLinks] = useState<null | linkType[]>(null);

  useEffect(() => {
    const temp = document.createElement("div");
    temp.innerHTML = htmlContent;

    const headings = temp.querySelectorAll("h2");
    const generatedLink: linkType[] = [];

    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      heading.id = id;

      generatedLink.push({
        id: id,
        text: heading.innerText,
      });
    });

    setLinks(generatedLink);
  }, [htmlContent]);

  return (
    <div className={cn("hidden md:block ", className)}>
      <div className="sticky  ">
        <h2>On This Page</h2>
        <ul className="">
          {links &&
            links.map((link, index) => (
              <li key={index}>
                <a href={`#${link.id}`}>{link.text}</a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default OnThisPage;
