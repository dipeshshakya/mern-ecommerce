import React from "react";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
const Container = styled.div`
  height: 60px;
  position: relative;
  &::after {
    content: "";
    clear: both;
  }
  padding: 0 0px 20px 0;
`;
const Wrapper = styled.div`
  //   padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  border: none;
`;
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-item: center;
  margin-left: 25px;
  padding: 4px;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 0 5px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input></Input>
            <Search style={{ color: "gray", fontSize: 16 }}></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Everest.</Logo>
        </Center>
        <Right>
          <MenuItem>Login</MenuItem>
          <MenuItem>Register</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
