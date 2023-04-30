import React from "react";
import Layout from "../../components/Layout";
import ArticleMeta from "@/components/ArticleMeta";
import { GetStaticProps, NextPage } from "next";
import { ArticleProps, Params } from "@/types/types";
import { fetchBlockByPageId, fetchPages } from "@/utils/notion";
import { getText } from "@/utils/property";

export const getStaticPaths = async () => {
  const { results } = await fetchPages({});
  const paths = results.map((page: any) => {
    return {
      params: {
        slug: getText(page.properties.slug.rich_text),
      },
    };
  });
  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params;

  const { results } = await fetchPages({ slug: slug });
  const page = results[0];
  const pageId = page.id;
  const { results: blocks } = await fetchBlockByPageId(pageId);

  return { props: { page: page, blocks: blocks }, redirect: 10 };
};

const Article: NextPage<ArticleProps> = ({ page, blocks }) => {
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
