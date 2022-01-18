import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 30px;
  background: teal;
  color: white;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TopNavBar = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default TopNavBar;
