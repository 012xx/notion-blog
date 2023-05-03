import type { GetServerSideProps, NextPage } from "next";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { IndexProps } from "../types/types";
import { fetchPages } from "@/utils/notion";

export const getServerSideProps: GetServerSideProps = async () => {
  const { results } = await fetchPages({});
  return {
    props: {
      pages: results ? results : [],
    },
  };
};

const Home: NextPage<IndexProps> = ({ pages }) => {
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

export default Home;
