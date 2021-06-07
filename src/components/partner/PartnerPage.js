import React from "react";
import styled from "styled-components";
import Wrapper from "../common/Wrapper";
import PageHeader from "../page-header/PageHeader";
import { data as partnerData } from "../../data/partner.json";
import PartnerItem from "./PartnerItem";

const PartnerPageBlock = styled.main`
  padding-bottom: 400px;
`;

const PartnerList = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

function PartnerPage() {
  return (
    <PartnerPageBlock>
      <Wrapper>
        <PageHeader
          title="파트너"
          description="원페이지는 다양한 브랜드, 서비스 및 개발사들과 함께 하겠습니다."
        />
        <PartnerList>
          {partnerData.map(({ name, link, image }) => (
            <PartnerItem key={name} name={name} link={link} img={image} />
          ))}
        </PartnerList>
      </Wrapper>
    </PartnerPageBlock>
  );
}

export default PartnerPage;
