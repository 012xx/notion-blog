import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Breadcrumb = () => {
  const router = useRouter();
  let joinedPath = "";
  return (
    <>
      {router.asPath.split("/").map((path) => {
        joinedPath += `${path}/`;
        return (
          <Link key={path} href={`/${joinedPath}`}>
            <span className="text-gray-500 hover:text-gray-600">
              <span className="text-gray-500 mx-2">/</span> {path}
            </span>
          </Link>
        );
      })}
    </>
  );
};

export default Breadcrumb;
