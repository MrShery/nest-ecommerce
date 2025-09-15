import React from "react";
import ProductDetailsLinks from "./ProductDetailsLinks";
function ProductCat_tags_links() {
  let links = [
    [
      {
        path: "/",
        title: "Milks and Dairies",
      },
      {
        path: "/",
        title: "Wines & Drinks",
      },
      {
        path: "/",
        title: "Bread and Juice",
      },
      { path: "/", title: "Cake & Milk" },
    ],
    [
      {
        path: "/",
        title: "Wallet",
      },
      {
        path: "/",
        title: "Clothes",
      },
      {
        path: "/",
        title: "Hand Bags",
      },
    ],
    [
      {
        path: "/",
        title: "Brands",
      },
    ],
  ];
  return (
    <>
      <ProductDetailsLinks
        title={"Categories:"}
        links={[
          {
            path: "/",
            title: "Milks and Dairies",
          },
          {
            path: "/",
            title: "Wines & Drinks",
          },
          {
            path: "/",
            title: "Bread and Juice",
          },
          { path: "/", title: "Cake & Milk" },
        ]}
      />
      <ProductDetailsLinks
        title={"Tags:"}
        links={[
          {
            path: "/",
            title: "Wallet",
          },
          {
            path: "/",
            title: "Clothes",
          },
          {
            path: "/",
            title: "Hand Bags",
          },
        ]}
      />
    </>
  );
}

export default ProductCat_tags_links;
