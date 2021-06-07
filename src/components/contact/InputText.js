import React from "react";
import styled from "styled-components";

const InputTextBlock = styled.div`
  width: 100%;
`;

const InputLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
`;
const InputLabelRequired = styled.span`
  color: #ff2d55;
`;

const InputTextElem = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  font-size: 14px;
  padding: 14px;
  border-radius: 4px;
  border: solid 1px #ededf2;
  background-color: #fff;

  &.warning {
    border: solid 2px #e42939;
  }

  &::placeholder {
    color: #cacaca;
  }

  &:focus {
    outline: 0;
    border: solid 2px #3dc277;
  }
`;

const TextAreaElem = styled.textarea`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 240px;
  font-size: 14px;
  padding: 14px;
  border-radius: 4px;
  border: solid 1px #ededf2;
  background-color: #fff;

  &.warning {
    border: solid 2px #e42939;
  }

  &::placeholder {
    color: #cacaca;
  }

  &:focus {
    outline: 0;
    border: solid 2px #3dc277;
  }
`;

const WarningMessage = styled.p`
  margin: 8px 0 0;
  font-size: 14px;
  color: #de2d3c;
`;

function InputText({
  label = "",
  value,
  name = "",
  required = false,
  placeholder = "",
  multiline = false,
  onChange,
  warningMessage = "",
}) {
  return (
    <InputTextBlock>
      <InputLabel htmlFor={name}>
        {label}
        {required ? <InputLabelRequired>*</InputLabelRequired> : " (선택)"}
      </InputLabel>
      {multiline ? (
        <TextAreaElem
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className={warningMessage.length > 0 ? "warning" : ""}
        />
      ) : (
        <InputTextElem
          id={name}
          type="text"
          value={value}
          name={name}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          className={warningMessage.length > 0 ? "warning" : ""}
        />
      )}
      {warningMessage.length > 0 && (
        <WarningMessage>{warningMessage}</WarningMessage>
      )}
    </InputTextBlock>
  );
}

export default InputText;
