import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { IndexProps, Params } from "../../types/types";
import { sampleCards } from "../../utils/sample";
import { fetchPages } from "@/utils/notion";

export const getStaticProps: GetStaticProps = async (context) => {
  const { tag } = context.params as Params;
  const { results } = await fetchPages({tag:tag});
  return {
    props: {
      pages: results ? results : [],
      tag: tag,
    },
    revalidate: 10,
  };
};

const Tag: NextPage<IndexProps> = ({ pages }) => {
  return (
    <Layout>
      <div className="grid md:grid-cols-2 w-full md:gap-7 md:px-32 xl:px-80">
        {pages.map((page) => (
          <Card key={page.id} page={page} />
        ))}
      </div>
    </Layout>
  );
};

export default Tag;
