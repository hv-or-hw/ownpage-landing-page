import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { query } from "../../utils/media-query";

const FaqItemBlock = styled.li`
  & + & {
    border-top: solid 1px #ededf2;
  }

  &:not(.active) > p {
    padding-top: 0;
    padding-bottom: 0;
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
  margin: 0;
  padding: 16px;
  font-size: 16px;

  border-top: solid 1px #ededf2;

  background-color: #fafafc;
  overflow: hidden;

  max-height: 0;
  transition: max-height 0.5s, padding 0.5s;

  @media (${query.mobile}) {
    padding: 16px 4px;
  }
`;

function FaqItem({ title, content, initActive = false }) {
  const [isActive, setActive] = useState(initActive);

  const refItem = useRef();

  const onClick = useCallback(() => {
    const panel = refItem.current;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    setActive(!isActive);
  }, [refItem, isActive]);

  return (
    <FaqItemBlock className={isActive ? "active" : ""} onClick={onClick}>
      <FaqItemTitle>{title}</FaqItemTitle>
      <FaqItemContent ref={refItem}>{content}</FaqItemContent>
    </FaqItemBlock>
  );
}

export default FaqItem;
