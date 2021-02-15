import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const WelcomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h1 {
    font-size: 30px;
    color: #383E71;
  }

  button {
    width: 100px;
    height: 30px;
    background-color: #383E71;
    color: #fff;
    outline: none;
    border: none;
    border-radius: 8px;
  }
`;

