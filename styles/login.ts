import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.main`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background-image: linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%), url("/assets/bg.png");
  background-position-x: center;
  background-size: cover;

  @media (max-width: 375px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  background-color:#FAF5FF;

  @media (max-width: 768px) {
    max-width: 455px;
  }

  @media (max-width: 375px) {
    background-image: linear-gradient(0deg, #130525 50%, rgba(105, 57, 153, 0) 100%), url("/assets/bg.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #130525;
  }

`;

export const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 112px;

  animation: ${appearFromRight} 1s;

  form {
    width: 256px;

    h1 {
      margin-bottom: 16px;
      font-weight: 400;
      font-size: 40px;
      line-height: 48px;
      color: #383E71;

      @media (max-width: 375px) {
        margin: 0 auto;
        max-width: 140px;
        font-size: 24px;
        line-height: 32px;
        text-align: center;
      }
    }

    h3 {
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #989FDB;
      margin-bottom: 32px;

      @media (max-width: 375px) {
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        margin-bottom: 20px;
      }
    }

    label {
      margin-left: 10px;
      font-weight: 400;
      font-size: 10px;
      color: #383E71;
      margin-bottom: 8px;
      display: block;
    }

    button {
      width: 100%;
      padding: 14px 0;
      margin: 24px 0 32px 0;

      background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
      box-shadow: 0px 10px 25px #CF99DB;
      border-radius: 8px;
      border: none;
      outline: none;

      color: #fff;
      font-family: 'Montserrat';
      font-size: 16px;
      font-weight: 600;

      cursor: pointer;

      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#fff')};
      }

      @media (max-width: 375px) {
        margin: 32px auto;
        width: 168px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: none;
      }
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 10px;
      text-align: center;
      color: #989FDB;

      a {
        color: #9D25B0;

        &:hover {
          color: ${shade(0.3, '#9D25B0')};
        }

        @media (max-width: 375px) {
          color: #fff;
        }
      }

      @media (max-width: 375px) {
        font-size: 14px;
        color: #fff;
      }
    }
  }

  @media (max-width: 768px) {
    margin-left: 80px;
  }

  @media (max-width: 375px) {
    margin: 0 auto;
    padding: 24px;
    border-radius: 8px;
    width: fit-content;
    background-color: #fff;

    max-height: 355px;
    overflow-y: visible;
  }
`;
