import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 8px;
  padding: 16px;
  width: 100%;

  border: 1px solid #989FDB;

  display: flex;
  align-items: center;

  & + label {
    margin-top: 16px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #FF377F;

      span {
        background: green;
        color: #fff;

        &::before {
          border-color: green transparent;
        }
      }
    `}

  ${props =>
    props.isFocused &&
    css`
      border: 1px solid #989fdb;
      box-shadow: 0px 0px 7px #989fdb;
    `}

  input {
    color: #383E71;
    font-size: 12px;
    flex: 1;
    background: transparent;
    border: 0;
    outline: 0;

    &::placeholder {
      color: #989FDB;
      font-size: 12px;
    }
  }
`;

export const Error = styled.div`
  &::before {
      content: 'x';
      color: #FF377F;
  }
`;

export const TextError = styled.span`
  font-size: 10px;
  margin: 8px 0 16px 10px;
  display:block;
  color: #FF377F;
`;
