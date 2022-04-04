import styled from "styled-components";

export const Box = styled.div`
  padding: 60px 0 20px 0;
  clear: both;
  display: inline-block;
  margin: 100px 0 0 0;
  border-top: 2px solid #333;
  background: white;

  position: absolute;

  bottom: 0;

  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  justify-content: center;
   

  max-width: 1400px;

  margin: 0 auto;

  /*background: red;/*
`;

export const Column = styled.div`
  display: flex;

  flex-direction: column;

  text-align: left;
`;

export const Row = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));

  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #777;

  margin-bottom: 5px;

  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  padding: 2px 0;
  padding-top: 2px;
  padding-right: 0px;
  padding-bottom: 2px;
  padding-left: 0px;
  &:hover {
    color: red;

    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 15px;

  color: black;

  margin-bottom: 20px;

  font-weight: bold;
`;
