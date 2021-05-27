import React from "react";
import styled from "styled-components";
import Wrapper from "../common/Wrapper";
import PageHeader from "../page-header/PageHeader";
import FaqList from "./FaqList";
import faq from "../../data/faq.json";
import { query } from "../../utils/media-query";

const FaqPageBlock = styled.main`
  @media (${query.mobile}) {
    padding-bottom: 80px;
  }
`;
const FaqPageWrapper = styled(Wrapper)``;

function FaqPage() {
  return (
    <FaqPageBlock>
      <FaqPageWrapper>
        <PageHeader
          title="자주 묻는 질문"
          description="원페이지를 처음 이용해보시는 분들 또는 상담이 필요하신 분들을 위해 질문과 답변을 모았습니다."
        />
        <FaqList faqList={faq.data} />
      </FaqPageWrapper>
    </FaqPageBlock>
  );
}

export default FaqPage;
