import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { IndexProps } from "../types/types";
import { sampleCards } from "../utils/sample";
import { fetchPages } from "@/utils/notion";

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages();
  return {
    props: {
      pages: results ? results : [],
    },
    revalidate: 10,
  };
};

const Home: NextPage<IndexProps> = ({ pages }) => {
  console.log(pages);
  return (
    <Layout>
      <div className="grid md:grid-cols-2 w-full md:gap-7 md:px-32 xl:px-80">
        {sampleCards.map((page) => (
          <Card key={page.slug} page={page} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
