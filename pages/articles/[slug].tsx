import React from "react";
import Layout from "../../components/Layout";
import ArticleMeta from "@/components/ArticleMeta";
import { GetServerSideProps, NextPage } from "next";
import { ArticleProps, Params } from "@/types/types";
import { sampleCards } from "@/utils/sample";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as Params;
  const page = sampleCards.find((data) => data.slug === slug);
  return { props: { page: page } };
};

const Article: NextPage<ArticleProps> = ({ page }) => {
  return (
    <Layout>
      <article className="w-full md:px-16 xl:px-80">
        {/* meta section */}
        <div className="my-12">
          <ArticleMeta page={page} />
        </div>

        {/* article */}
        <div className="my-12">article ${page.content}</div>
      </article>
    </Layout>
  );
};

export default Article;
