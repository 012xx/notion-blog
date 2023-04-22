import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col items-center max-2xl w-full mx-auto">
        <Header />
        {/* <main></main> */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
