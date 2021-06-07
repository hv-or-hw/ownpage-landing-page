import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { query } from "../../utils/media-query";
import Wrapper from "../common/Wrapper";

const NavigationBlock = styled.nav`
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 999;

  height: 80px;
  box-shadow: 0 1px 2px 0 rgba(41, 42, 43, 0.1);

  @media (${query.mobile}) {
    height: 60px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  }
`;

const NavigationWrapper = styled(Wrapper)`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: relative;
`;

const Logo = styled.img`
  padding: 8px;
  height: 36px;
  display: block;

  @media (${query.mobile}) {
    height: 20px;
  }
`;
const MenuBlock = styled.section`
  font-size: 16px;

  @media (${query.mobile}) {
    box-sizing: border-box;
    position: absolute;
    top: 100%;
    left: 0;

    width: 100%;
    height: 0;

    padding: 0 16px;
    text-align: center;
    border: solid 1px #eee;
    background-color: #fefefe;
    overflow: hidden;

    transition: height 0.3s ease-out;

    &.open {
      height: 194px;
    }
  }
`;

const MenuItem = styled(NavLink)`
  text-decoration: none;
  padding: 12px;
  border-radius: 8px;

  @media (${query.mobile}) {
    display: block;
    margin: 16px auto;
  }

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

    @media (${query.mobile}) {
      margin-left: inherit;
    }
  }
`;

const MenuButton = styled.img`
  display: none;
  width: 24px;
  height: 24px;

  @media (${query.mobile}) {
    display: block;
    cursor: pointer;
  }
`;

function Navigation({ logoSrc, links }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <NavigationBlock>
      <NavigationWrapper>
        <Link to="/">
          <Logo src={logoSrc} alt="Logo" />
        </Link>
        <MenuBlock className={mobileMenuOpen ? "open" : ""}>
          {links.map((link) => (
            <MenuItem
              key={link.href}
              className={link.type ? link.type : "default"}
              to={link.href}
            >
              {link.name}
            </MenuItem>
          ))}
        </MenuBlock>
        <MenuButton
          src="/assets/images/menu-btn.png"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
      </NavigationWrapper>
    </NavigationBlock>
  );
}

export default Navigation;
