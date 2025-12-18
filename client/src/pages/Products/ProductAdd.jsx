import React from "react";
import BreadCrumbs from "../../features/auth/components/BreadCrumbs";
import ProductForm from "../../ui/forms/ProductForm";

const ProductAdd = () => {
  return (
    <>
      <BreadCrumbs title="Add Product" />
      <ProductForm />
    </>
  );
};

export default ProductAdd;
