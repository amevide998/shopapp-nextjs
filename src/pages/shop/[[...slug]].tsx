import { useRouter } from "next/router";
import React from "react";

const ShopPage = () => {
  const { query } = useRouter();
  console.log(query);

  return (
    <>
      <div>ShopPage</div>
      <div>Shop : {query.slug ? query.slug[0] : "" } - {query.slug ? query.slug[1] : ""}</div>
    </>
  );
};

export default ShopPage;
