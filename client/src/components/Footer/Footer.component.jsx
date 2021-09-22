import React from "react";

import "./Footer.styles";
import {
  FooterContainer,
  LinkContainer,
  TitleContainer,
  MapContainer,
} from "./Footer.styles";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <TitleContainer>Shoppers Loop</TitleContainer>
      <LinkContainer>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/signin'>Sign In</Link>
        </li>
      </LinkContainer>
      <MapContainer></MapContainer>
    </FooterContainer>
  );
};

export default Footer;
