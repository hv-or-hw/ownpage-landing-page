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
          label="??????"
          name="customer_name"
          placeholder="????????? ??????????????????"
          required
          value={state.customer_name}
          onChange={onInputChange}
          warningMessage={
            state.customer_name.length === 0 ? "?????? ?????? ???????????????." : ""
          }
        />
        <InputText
          label="????????? ??????"
          name="customer_email"
          placeholder="????????? ????????? ??????????????????"
          required
          value={state.customer_email}
          onChange={onInputChange}
          warningMessage={
            state.customer_email.length === 0 ? "?????? ?????? ???????????????." : ""
          }
        />
      </TwoColumnRow>
      <TwoColumnRow>
        <InputText
          label="?????????"
          name="customer_tel"
          placeholder="???????????? ??????????????????"
          required
          onChange={onInputChange}
          warningMessage={
            state.customer_tel.length === 0 ? "?????? ?????? ???????????????." : ""
          }
        />
        <InputText
          label="?????????"
          name="customer_company"
          placeholder="???????????? ??????????????????"
          onChange={onInputChange}
        />
      </TwoColumnRow>
      <TwoColumnRow>
        <InputText
          label="??????"
          name="customer_department"
          placeholder="????????? ??????????????????"
          onChange={onInputChange}
        />
        <InputText
          label="??????"
          name="customer_position"
          placeholder="????????? ??????????????????"
          onChange={onInputChange}
        />
      </TwoColumnRow>
      <FormRow>
        <InputText
          label="???????????? ????????? ??????"
          name="website"
          placeholder="???????????? ???????????? ????????? ????????? ???????????????"
          onChange={onInputChange}
        />
      </FormRow>
      <FormRow>
        <InputText
          label="????????? ?????? ?????????"
          name="reference_website"
          placeholder="????????? ?????? ???????????? ????????? ????????? ???????????????"
          onChange={onInputChange}
        />
      </FormRow>
      <FormRow>
        <InputText
          label="?????? ??????"
          name="etc"
          placeholder="?????? ??????????????? ???????????? ???????????????"
          onChange={onInputChange}
          multiline
        />
      </FormRow>
      <SubmitButton className={submitActive ? "active" : ""} type="submit">
        ????????????
      </SubmitButton>
    </ContactFormBlock>
  );
}

export default ContactForm;
