import React from "react";
import Layout from "../../components/Layout";
import ArticleMeta from "@/components/ArticleMeta";
import { GetStaticProps, NextPage } from "next";
import { ArticleProps, Params } from "@/types/types";
import { fetchBlocksByPageId, fetchPages } from "@/utils/notion";
import { getText } from "@/utils/property";
import NotionBlocks from "notion-block-renderer";
import { qtcreatorDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

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
  const { results: blocks } = await fetchBlocksByPageId(pageId);

  return { props: { page: page, blocks: blocks }, revalidate: 60*60 // 秒単位
};
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
