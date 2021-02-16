import { useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

import { useDispatch } from 'react-redux';
import { addUserAuth } from '../src/store/modules/userAuth/actions';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useToast } from '../src/hooks/toast';
import Input from '../src/components/Input/index';
import getValidationErrors from '../src/utils/getValidationErrors';

import { Container, Background, Content, AnimationContainer } from '../styles/login';
import api from '../src/services/api';
interface User {
  email: string;
  password: string;
}
interface UserProps {
  users: User[]
}

export default function Home({ users }: UserProps) {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const router = useRouter();

  const dispatch = useDispatch();

  const checkLogin = useCallback((data: User) => {
    const userExists = users.find((u) => {
      if (u.email === data.email && u.password === data.password) {
        return u;
      }
    });

    if (userExists) {
      dispatch(addUserAuth(userExists));

      addToast({
        type: 'success',
        title: 'Sucesso',
        description: 'Login realizado com sucesso!',
      });

      router.push('/dashboard');
    }
    else {
      addToast({
        type: 'error',
        title: 'Erro',
        description: 'Ocorreu um erro ao fazer login, tente novamente.',
      });
    }
  }, [dispatch]);

  const handleSubmit = useCallback(async (data: User) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Digite um e-mail válido')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(7, 'No mínimo 7 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      checkLogin(data);

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
    }

  }, [addToast]);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Olá, seja bem-vindo!</h1>
            <h3>Para acessar a plataforma, faça seu login.</h3>

            <label htmlFor="email">E-MAIL</label>
            <Input name="email" placeholder="user.name@mail.com" id="email" />

            <label htmlFor="password">SENHA</label>
            <Input
              name="password"
              type="password"
              placeholder="senha"
              id="password"
            />

            <button type="submit">ENTRAR</button>

            <p>Esqueceu seu login ou senha?</p>
            <p>Clique <a href='#'>aqui</a></p>
          </Form>

        </AnimationContainer>

      </Content>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('users');

  return {
    props: {
      users: response.data
    }
  }
}
