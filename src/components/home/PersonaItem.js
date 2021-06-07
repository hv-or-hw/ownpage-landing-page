import React from "react";
import styled from "styled-components";

const PersonaItemBlock = styled.article`
  padding: 16px;
  width: 100%;
  border: solid 1px #eee;
  border-radius: 4px;
  box-sizing: border-box;
`;

const ProfileImg = styled.img`
  display: block;

  width: 100%;
  object-fit: cover;
  margin-bottom: 24px;
`;

const PersonaDescription = styled.p`
  margin: 0 0 15px;
  font-size: 16px;
  color: #222;
  text-align: center;
`;

function PersonaItem({
  profile = "https://via.placeholder.com/221",
  children,
}) {
  return (
    <PersonaItemBlock>
      <ProfileImg src={profile} alt="Profile" />
      <PersonaDescription>{children}</PersonaDescription>
    </PersonaItemBlock>
  );
}

export default PersonaItem;
