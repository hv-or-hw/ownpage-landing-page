import React from "react";
import styled from "styled-components";
import { query } from "../../utils/media-query";

const PartnerItemBlock = styled.a`
  box-sizing: border-box;
  border: solid 1px #efefef;
  display: block;
  width: 20%;

  @media (${query.mobile}) {
    width: 50%;
  }
`;
const PartnerImage = styled.img`
  display: block;
  width: 100%;
`;

function PartnerItem({ name, img, link }) {
  return (
    <PartnerItemBlock href={link}>
      <PartnerImage src={img} alt={name} />
    </PartnerItemBlock>
  );
}

export default PartnerItem;
