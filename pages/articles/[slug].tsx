import React from "react";
import Layout from "../../components/Layout";
import ArticleMeta from "@/components/ArticleMeta";
import { GetServerSideProps, NextPage } from "next";
import { ArticleProps, Params } from "@/types/types";
import { fetchBlocksByPageId, fetchPages } from "@/utils/notion";
import NotionBlocks from "notion-block-renderer";
import { qtcreatorDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as Params;

  const { results } = await fetchPages({ slug: slug });
  const page = results[0];
  const pageId = page.id;
  const { results: blocks } = await fetchBlocksByPageId(pageId);

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

        <div className="my-12">
          <NotionBlocks
            blocks={blocks}
            isCodeHighlighter={true}
            syntaxHighlighterCSS={qtcreatorDark}
          />
        </div>
      </article>
    </Layout>
  );
};

export default Article;
