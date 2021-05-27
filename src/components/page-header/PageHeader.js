import React from "react";
import styled from "styled-components";
import { query } from "../../utils/media-query";

const PageHeaderBlock = styled.header`
  text-align: center;
  width: 100%;
  padding: 60px 0;

  @media (${query.mobile}) {
    padding: 40px 0 8px;
  }
`;
const PageTitle = styled.h1`
  color: #3dc277;
  font-size: 32px;
  margin: 20px 0;
`;
const PageDescription = styled.p`
  font-size: 18px;
`;

function PageHeader({ title, description }) {
  return (
    <PageHeaderBlock>
      <PageTitle>{title}</PageTitle>
      <PageDescription>{description}</PageDescription>
    </PageHeaderBlock>
  );
}

export default PageHeader;
