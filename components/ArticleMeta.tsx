import { ArticleMetaProps } from "@/types/types";
import Image from "next/image";
import React from "react";

const ArticleMeta = ({ page }: ArticleMetaProps) => {
  return (
    <>
      {/* page cover */}
      <Image
        className="w-full static h-auto"
        src={page.cover}
        alt=""
        width={640}
        height={360}
        quality={50}
      />

      {/* page name */}
      <h1 className="my-8">{page.name}</h1>
      <div className="bg-gray-100 px-6 py-4 rounded text-sm text-gray-500">
        <div className="grid grid-cols-3 gap-4">
          {/* published */}
          <div className="col-span-1">Published</div>
          <div className="col-span-2">{page.published}</div>

          {/* author */}
          <div className="col-span-1">Author</div>
          <div className="col-span-2">{page.author}</div>

          {/* tags */}
          <div className="col-span-1">Tags</div>
          <div className="col-span-2">
            {/* change later */}
            {page.tags.map((tag: string) => (
              <span key={tag}>{`#${tag} `}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleMeta;
