import React, { useState } from "react";
import styled from "styled-components";
import { query } from "../../utils/media-query";

const FaqItemBlock = styled.li`
  & + & {
    border-top: solid 1px #ededf2;
  }

  &:not(.active) > p {
    height: 0;
    padding: 0;
    border: 0;
  }
`;
const FaqItemTitle = styled.h2`
  box-sizing: border-box;
  margin: 0;
  padding: 26px 12px;
  font-size: 18px;

  @media (${query.mobile}) {
    padding: 26px 4px;
  }
`;
const FaqItemContent = styled.p`
  box-sizing: border-box;
  margin: 0;
  padding: 16px;
  font-size: 16px;

  border-top: solid 1px #ededf2;

  background-color: #fafafc;
  overflow: hidden;

  @media (${query.mobile}) {
    padding: 16px 4px;
  }
`;

function FaqItem({ title, content, initActive = false }) {
  const [isActive, setActive] = useState(initActive);

  return (
    <FaqItemBlock
      className={isActive ? "active" : ""}
      onClick={() => setActive(!isActive)}
    >
      <FaqItemTitle>{title}</FaqItemTitle>
      <FaqItemContent>{content}</FaqItemContent>
    </FaqItemBlock>
  );
}

export default FaqItem;
