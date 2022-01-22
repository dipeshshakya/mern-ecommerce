import React from "react";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  position: relative;
  ${mobile({ height: "50px" })}

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
  ${mobile({ padding: "10px 0px" })}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}

`;
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}

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
  ${mobile({ fontSize: "24px" })}

`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  ${mobile({ flex: 2, justifyContent: "center" })}

`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 0 5px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}

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
