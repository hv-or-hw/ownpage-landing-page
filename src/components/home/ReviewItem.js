import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewItemBlock = styled.article`
  padding: 24px;
  width: 100%;
  background-color: #fff;
  border: solid 1px #eee;
  border-radius: 8px;
  box-sizing: border-box;
  text-align: left;
`;

const UserContainer = styled.section`
  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;
const UserImage = styled.img`
  float: left;
  display: block;
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 12px;
`;
const UserName = styled.h1`
  margin: 4px 0;
`;
const UserGroup = styled.p`
  margin: 4px 0;
`;

const StarContainer = styled.section`
  font-size: 16px;
  margin: 12px 0 20px;
`;

const Content = styled.p`
  height: 170px;
  color: #3d454d;
  font-size: 16px;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipse;
`;

function ReviewItem({
  user = {
    img: "/assets/home/user-1.png",
    name: "미노이",
    group: "에잇볼타운",
  },
  score = 5,
  content = "",
}) {
  const scoreToStar = [];
  for (let i = 0; i < score; i++) {
    scoreToStar.push(
      <FontAwesomeIcon key={"star" + i} icon={faStar} color="#ff9f0a" />
    );
  }

  return (
    <ReviewItemBlock>
      <UserContainer>
        <UserImage src={user.img} alt="User" />
        <UserName>{user.name}님</UserName>
        <UserGroup>{user.group}</UserGroup>
      </UserContainer>
      <StarContainer>{scoreToStar}</StarContainer>
      <Content>{content}</Content>
    </ReviewItemBlock>
  );
}

export default ReviewItem;
