import React, { useCallback, useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import { query } from "../../utils/media-query";
import InputText from "./InputText";

const inputChangeReducer = (state, actions) => {
  return { ...state, [actions.name]: actions.value };
};

const ContactFormBlock = styled.form`
  font-size: 16px;
`;

const FormRow = styled.div`
  margin-bottom: 36px;

  @media (${query.mobile}) {
    margin-bottom: 24px;
  }
`;

const TwoColumnRow = styled(FormRow)`
  display: flex;
  justify-content: space-between;

  & > div {
    width: calc(50% - 20px);

    @media (${query.mobile}) {
      width: 100%;

      margin-bottom: 24px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media (${query.mobile}) {
    flex-direction: column;
  }
`;

const SubmitButton = styled.button`
  cursor: pointer;

  margin-top: 36px;
  padding: 15px 0;
  display: block;
  width: 100%;

  font-size: 16px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.3);
  background-color: #f5f5fa;

  border: 0;
  border-radius: 6px;

  @media (${query.mobile}) {
    margin-top: 48px;
  }

  &.active {
    color: #fff;
    background-color: #3dc277;
  }
`;

function ContactForm({ onSubmit }) {
  const [state, dispatch] = useReducer(inputChangeReducer, {
    customer_name: "",
    customer_email: "",
    customer_tel: "",
    customer_company: "",
    customer_department: "",
    customer_position: "",
    website: "",
    reference_website: "",
    etc: "",
  });

  const [submitActive, setSubmitActive] = useState(false);

  const onInputChange = useCallback(
    (e) => {
      dispatch({ name: e.target.name, value: e.target.value });
    },
    [dispatch]
  );

  useEffect(() => {
    const requiredList = ["customer_name", "customer_email", "customer_tel"];
    let unfilledRequiredExists = false;
    requiredList.forEach((name) => {
      if (state[name].length === 0) {
        unfilledRequiredExists = true;
      }
    });

    setSubmitActive(!unfilledRequiredExists);
  }, [state]);

  return (
    <ContactFormBlock
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(state);
      }}
    >
      <TwoColumnRow>
        <InputText
          label="성함"
          name="customer_name"
          placeholder="성함을 입력해주세요"
          required
          value={state.customer_name}
          onChange={onInputChange}
        />
        <InputText
          label="이메일 주소"
          name="customer_email"
          placeholder="이메일 주소를 입력해주세요"
          required
          value={state.customer_email}
          onChange={onInputChange}
        />
      </TwoColumnRow>
      <TwoColumnRow>
        <InputText
          label="연락처"
          name="customer_tel"
          placeholder="연락처를 입력해주세요"
          required
          onChange={onInputChange}
        />
        <InputText
          label="회사명"
          name="customer_company"
          placeholder="회사명을 입력해주세요"
          onChange={onInputChange}
        />
      </TwoColumnRow>
      <TwoColumnRow>
        <InputText
          label="부서"
          name="customer_department"
          placeholder="부서를 입력해주세요"
          onChange={onInputChange}
        />
        <InputText
          label="직책"
          name="customer_position"
          placeholder="직책을 입력해주세요"
          onChange={onInputChange}
        />
      </TwoColumnRow>
      <FormRow>
        <InputText
          label="운영중인 사이트 주소"
          name="website"
          placeholder="운영중인 사이트가 있다면 주소를 알려주세요"
          onChange={onInputChange}
        />
      </FormRow>
      <FormRow>
        <InputText
          label="참고할 만한 사이트"
          name="reference_website"
          placeholder="참고할 만한 사이트가 있다면 주소를 알려주세요"
          onChange={onInputChange}
        />
      </FormRow>
      <FormRow>
        <InputText
          label="기타 문의"
          name="etc"
          placeholder="기타 문의사항을 자유롭게 적어주세요"
          onChange={onInputChange}
          multiline
        />
      </FormRow>
      <SubmitButton className={submitActive ? "active" : ""} type="submit">
        문의하기
      </SubmitButton>
    </ContactFormBlock>
  );
}

export default ContactForm;
