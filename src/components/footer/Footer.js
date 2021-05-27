import React from "react";
import styled from "styled-components";
import footerData from "../../data/footer.json";
import Wrapper from "../common/Wrapper";

const FooterBlock = styled.footer`
  padding: 48px 0;
  background-color: #fafbfc;

  font-size: 12px;
  color: rgba(0, 0, 0, 0.3);
`;
const FooterLogo = styled.img`
  height: 20px;
  background-color: #333;
  padding: 8px;
  margin-bottom: 22px;
`;

const CompanyInfoBlock = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 600px;
  line-height: 1.75;

  p {
    margin: 0;
  }

  span {
    margin: 0 4px;
  }
`;

function Footer({ logoSrc }) {
  return (
    <FooterBlock>
      <Wrapper>
        <FooterLogo src={logoSrc} alt="Footer Logo" />
        <CompanyInfoBlock>
          <p>{footerData.address}</p> <span>/</span>{" "}
          <p>대표 {footerData.owner}</p> <span>/</span>
          <p>사업자 등록번호 {footerData.businessNo}</p> <span>/</span>
          <p>통신판매번호 {footerData.mailOrderNo}</p> <span>/</span>
          <p>전화번호 {footerData.tel}</p> <span>/</span>{" "}
          <p>{footerData.fax}</p>
        </CompanyInfoBlock>
      </Wrapper>
    </FooterBlock>
  );
}

export default Footer;
