import styled from "styled-components";
import { query } from "../../utils/media-query";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (${query.mobile}) {
    padding: 0 16px;
  }
`;

export default Wrapper;
