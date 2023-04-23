import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "@/types/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <main className="pb-12 px-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
