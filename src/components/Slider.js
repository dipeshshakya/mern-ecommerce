import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 560px;
  display: flex;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    clear: both;
  }
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background: #fff7f7;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "20px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(-100vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 80%;
`;
const InfoContainer = styled.div`
  padding: 50px;
  position: relative;
  z-index: 6;
`;
const Title = styled.h1`
  font-size: 70px;
  font-weight: 600;
`;
const Desc = styled.p`
  font-size: 20px;
  margin: 50px 0;
  font-weight: 500;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
`;
const Slider = () => {
    const [slideIndex,setSlideIndex]
  const handleClick = (direction) => {};
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg="fefefe">
          <ImageContainer>
            <Image src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></Image>
          </ImageContainer>
          <InfoContainer>
            <Title>Summer Sale</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
              itaque!
            </Desc>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fefefd">
          <ImageContainer>
            <Image src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></Image>
          </ImageContainer>
          <InfoContainer>
            <Title>Summer Sale</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
              itaque!
            </Desc>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
    </Container>
  );
};

export default Slider;
