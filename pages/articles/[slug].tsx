import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout";
import ArticleMeta from "@/components/ArticleMeta";

const Article = () => {
  return (
    <Layout>
      <article className="w-full md:px-16 xl:px-80">
        {/* meta section */}
        <div className="my-12">
          <ArticleMeta />
        </div>

        {/* article */}
        <div className="my-12">article</div>
      </article>
    </Layout>
  );
};

export default Article;
