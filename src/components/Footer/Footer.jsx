import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <div style={{ marginTop: "100px", marginLeft: "50px" }}>
              <h1>LAYLA</h1>
            </div>
          </Column>
          <Column>
            <Heading>MENU</Heading>

            <FooterLink href="#">ABOUT</FooterLink>

            <FooterLink href="#">SHOP</FooterLink>

            <FooterLink href="#">LOOKBOOK</FooterLink>

            <FooterLink href="#">STORIES</FooterLink>

            <FooterLink href="#">EVENT</FooterLink>

            <FooterLink href="#">STORE</FooterLink>
          </Column>

          <Column>
            <Heading>CONTACT</Heading>

            <FooterLink href="#">Q&A</FooterLink>

            <FooterLink href="#">FRANCHISE</FooterLink>

            <FooterLink href="#">FAQ</FooterLink>

            <FooterLink href="#">MY PAGE</FooterLink>

            <FooterLink href="#">PRIVACY</FooterLink>

            <FooterLink href="#">AGREEMENT</FooterLink>
          </Column>

          <Column>
            <div style={{}}>
              <Heading>COSTUMER</Heading>

              <FooterLink href="#">
                <strong style={{ color: "black" }}>Logistics Center</strong>
              </FooterLink>

              <FooterLink href="#">
                <div>22-18, Deogi-ro, Majang-myeon, Icheon-si,</div>
              </FooterLink>

              <FooterLink href="#">Gyeonggi-do, Republic of Korea</FooterLink>
              <br />
              <br />

              <FooterLink href="#">
                <strong style={{ color: "black" }}>Marketing & Collab</strong>
              </FooterLink>
              <br />
              <FooterLink href="#">Soo@thekary.com</FooterLink>
            </div>
          </Column>

          <Column style={{ width: "450px" }}>
            <div></div>
            <Heading>COMPANY</Heading>

            <FooterLink href="#">
              <strong style={{ color: "black" }}>Corporate Name</strong> the
              KARY
            </FooterLink>

            <FooterLink href="#">
              <strong style={{ color: "black" }}>CEO</strong> Eun Jung Lee
            </FooterLink>

            <FooterLink href="#">
              <strong style={{ color: "black" }}>Adress</strong>
            </FooterLink>

            <FooterLink href="#">
              2F, 738-36, Hannam-dong, Yongsan-gu, Seoul, Republic of
            </FooterLink>
            <FooterLink href="#">Korea</FooterLink>
            <FooterLink href="#">
              <strong style={{ color: "black" }}>
                Business Registration No
              </strong>{" "}
              128-87-03548
            </FooterLink>
            <FooterLink href="#">
              <strong style={{ color: "black" }}>Corporation No</strong>{" "}
              285011-0256318
            </FooterLink>
            <FooterLink href="#">
              <strong style={{ color: "black" }}>E-commerce Permit</strong>{" "}
              2021-SeoulYongsan-1694 [Mail-order
            </FooterLink>
            <FooterLink href="#">Business Registration Number]</FooterLink>
            <FooterLink href="#">
              <strong style={{ color: "black" }}>E-MAIL</strong>{" "}
              bebedepino@thekary.com
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "110px",
        }}
      >
        <h5>
          Copyright © <strong style={{ color: "black" }}>LAYLA</strong> . All
          rights reserved
        </h5>
      </div>
    </Box>
  );
};

export default Footer;
