import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../common/Wrapper";

const NavigationBlock = styled.nav`
  height: 80px;
  box-shadow: 0 1px 2px 0 rgba(41, 42, 43, 0.1);
`;
const NavigationWrapper = styled(Wrapper)`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  background-color: #333;
  padding: 8px;
  height: 36px;
  display: block;
`;
const LinkBlock = styled.section`
  font-size: 16px;
`;

const LinkItem = styled(NavLink)`
  text-decoration: none;
  padding: 12px;
  border-radius: 8px;

  &.default {
    color: black;
  }

  &.primary {
    color: white;
    background-color: #3dc277;
    font-weight: bold;
  }

  & + & {
    margin-left: 32px;
  }
`;

function Navigation({ logoSrc, links }) {
  return (
    <NavigationBlock>
      <NavigationWrapper>
        <Link to="/">
          <Logo src={logoSrc} alt="Logo" />
        </Link>
        <LinkBlock>
          {links.map((link) => (
            <LinkItem
              className={link.type ? link.type : "default"}
              to={link.href}
            >
              {link.name}
            </LinkItem>
          ))}
        </LinkBlock>
      </NavigationWrapper>
    </NavigationBlock>
  );
}

export default Navigation;
