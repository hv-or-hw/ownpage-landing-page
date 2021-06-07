import React from "react";
import styled from "styled-components";
import Wrapper from "../common/Wrapper";
import PageHeader from "../page-header/PageHeader";

const PartnerPageBlock = styled.main`
  padding-bottom: 120px;
`;

function ContactPage() {
  return (
    <PartnerPageBlock>
      <Wrapper>
        <PageHeader
          title="파트너"
          description="원페이지는 다양한 브랜드, 서비스 및 개발사들과 함께 하겠습니다."
        />
        {/* Content here */}
      </Wrapper>
    </PartnerPageBlock>
  );
}

export default ContactPage;
