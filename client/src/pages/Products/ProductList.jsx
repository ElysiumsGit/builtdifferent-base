import React from "react";
import BreadCrumbs from "../../features/auth/components/BreadCrumbs";
import PageCard from "../../features/auth/components/PageCard";
import { Box, Grid } from "@mui/material";
import MyTable from "../../ui/components/Table/MyTable";
import MyTypography from "../../ui/components/Typography/MyTypography";

const productRowsDummy = [
  {
    image: "/images/product-1.png",
    name: "Tops and skirt set for women",
    description: "Women's exclusive summer wear",
    category: "Woman",
    price: "$21.00",
    rating: "4.9 (16)",
    orders: 380,
  },
  {
    image: "/images/product-1.png",
    name: "Tops and skirt set for women",
    description: "Women's exclusive summer wear",
    category: "Woman",
    price: "$21.00",
    rating: "4.9 (16)",
    orders: 380,
  },
  {
    image: "/images/product-1.png",
    name: "Tops and skirt set for women",
    description: "Women's exclusive summer wear",
    category: "Woman",
    price: "$21.00",
    rating: "4.9 (16)",
    orders: 380,
  },
  {
    image: "/images/product-1.png",
    name: "Tops and skirt set for women",
    description: "Women's exclusive summer wear",
    category: "Woman",
    price: "$21.00",
    rating: "4.9 (16)",
    orders: 380,
  },
  {
    image: "/images/product-1.png",
    name: "Tops and skirt set for women",
    description: "Women's exclusive summer wear",
    category: "Woman",
    price: "$21.00",
    rating: "4.9 (16)",
    orders: 380,
  },
  {
    image: "/images/product-1.png",
    name: "Tops and skirt set for women",
    description: "Women's exclusive summer wear",
    category: "Woman",
    price: "$21.00",
    rating: "4.9 (16)",
    orders: 380,
  },
  {
    image: "/images/product-1.png",
    name: "Tops and skirt set for women",
    description: "Women's exclusive summer wear",
    category: "Woman",
    price: "$21.00",
    rating: "4.9 (16)",
    orders: 380,
  },
  {
    image: "/images/product-1.png",
    name: "Tops and skirt set for women",
    description: "Women's exclusive summer wear",
    category: "Woman",
    price: "$21.00",
    rating: "4.9 (16)",
    orders: 380,
  },
  {
    image: "/images/product-1.png",
    name: "Tops and skirt set for women",
    description: "Women's exclusive summer wear",
    category: "Woman",
    price: "$21.00",
    rating: "4.9 (16)",
    orders: 380,
  },
  {
    image: "/images/product-1.png",
    name: "Tops and skirt set for women",
    description: "Women's exclusive summer wear",
    category: "Woman",
    price: "$21.00",
    rating: "4.9 (16)",
    orders: 380,
  },
  {
    image: "/images/product-1.png",
    name: "Tops and skirt set for women",
    description: "Women's exclusive summer wear",
    category: "Woman",
    price: "$21.00",
    rating: "4.9 (16)",
    orders: 380,
  },
];

const productColumnsDummy = [
  {
    id: "product",
    label: "Product",
    minWidth: 300,
    render: (row) => (
      <Box display="flex" gap={2} alignItems="center">
        <Box
          component="img"
          src={row.image}
          alt={row.name}
          sx={{
            width: 48,
            height: 48,
            borderRadius: 1,
            objectFit: "cover",
            border: "1px solid #e0e0e0",
          }}
        />

        <Box>
          <MyTypography fontWeight="600" fontSize="14px">
            {row.name}
          </MyTypography>
          <MyTypography fontSize="12px" color="text.secondary">
            {row.description}
          </MyTypography>
        </Box>
      </Box>
    ),
  },
  { id: "category", label: "Category", minWidth: 120 },
  { id: "price", label: "Price", minWidth: 100 },
  { id: "rating", label: "Rating", minWidth: 120 },
  { id: "orders", label: "Orders", minWidth: 100 },
  { id: "action", label: "Action", minWidth: 150 },
];

const ProductList = () => {
  return (
    <>
      <BreadCrumbs title="Product List" />
      <Grid container spacing={2}>
        <Grid size={{ md: 4, xs: 12 }}>
          <PageCard />
        </Grid>
        <Grid size={{ md: 4, xs: 12 }}>
          <PageCard />
        </Grid>
        <Grid size={{ md: 4, xs: 12 }}>
          <PageCard />
        </Grid>
      </Grid>
      <MyTable
        tableTitle="Product List"
        hasAddButton
        buttonTitle="Add Product"
        hasPrinter
        hasFilter
        rows={productRowsDummy}
        columns={productColumnsDummy}
      />
    </>
  );
};

export default ProductList;
