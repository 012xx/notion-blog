import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "@/types/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col items-center max-2xl w-full mx-auto">
        <Header />
        <main className="w-full pb-12 px-40">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
