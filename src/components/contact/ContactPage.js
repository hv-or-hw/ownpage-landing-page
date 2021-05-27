import React from "react";
import styled from "styled-components";
import Wrapper from "../common/Wrapper";
import PageHeader from "../page-header/PageHeader";
import ContactForm from "./ContactForm";

const ContactPageBlock = styled.main`
  padding-bottom: 120px;
`;

function ContactPage() {
  return (
    <ContactPageBlock>
      <PageHeader
        title="견적 문의하기"
        description="궁금한 내용을 문의주시면 자세히 안내해 드리겠습니다."
      />
      <Wrapper>
        <ContactForm onSubmit={(formData) => console.log(formData)} />
      </Wrapper>
    </ContactPageBlock>
  );
}

export default ContactPage;
