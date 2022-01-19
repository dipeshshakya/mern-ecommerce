import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductItem from "./ProductItem";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 15%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
