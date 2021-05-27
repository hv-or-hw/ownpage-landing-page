import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationBlock = styled.nav``;
const Logo = styled.img``;
const LinkBlock = styled.section``;

function Navigation({ logoSrc, links }) {
  return (
    <NavigationBlock>
      <Logo src={logoSrc} alt="Logo" />
      <LinkBlock>
        {links.map((link) => (
          <NavLink to={link.href}>{link.name}</NavLink>
        ))}
      </LinkBlock>
    </NavigationBlock>
  );
}

export default Navigation;
