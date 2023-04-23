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
      <div className="grid md:grid-cols-2 w-full gap-9">
        {sampleCards.map((page) => (
          <span className="justify-items-center">
            <Card key={page.slug} page={page} />
          </span>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
