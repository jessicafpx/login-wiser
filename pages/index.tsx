import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
`;

const Background = styled.div`
  flex: 1;
  background: url("/assets/bg.png") no-repeat;
  background-size: cover;
`;


const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 35px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 15px;
    }

    button {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f3ede8')};
      }
    }
  }
  > button {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export default function Home() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {

  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Olá, seja bem-vindo!</h1>
            <p>Para acessar a plataforma, faça seu login</p>
            <input name="email" placeholder="user.name@mail.com" />
            <input
              name="password"
              type="password"
              placeholder="*******"
            />

            <button type="submit">Entrar</button>
          </Form>

          <p>
            Esqueceu seu login ou senha? Clique aqui
            </p>
        </AnimationContainer>

      </Content>
    </Container>

  );
}
