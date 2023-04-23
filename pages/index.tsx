import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { siteConfig } from "../site.config";
import { sampleCards } from "../utils/sample";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="grid md:gap-10 mt-10 md:grid-cols-3 w-full my-12 px-20">
        {sampleCards.map((page) => (
          <Card key={page.slug} page={page} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
