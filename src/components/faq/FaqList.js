import React from "react";
import styled from "styled-components";
import FaqItem from "./FaqItem";

const FaqListBlock = styled.ul`
  list-style: none;

  margin: 0;
  padding: 0;
  width: 100%;
`;

function FaqList({ faqList }) {
  return (
    <FaqListBlock>
      {faqList.map((item, idx) => (
        <FaqItem key={idx} title={item.title} content={item.content} />
      ))}
    </FaqListBlock>
  );
}

export default FaqList;
