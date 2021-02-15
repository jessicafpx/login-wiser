import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Login from '../../../pages/index';

const mockedAddToast = jest.fn();
const mockedPush = jest.fn();

jest.mock('../../hooks/toast', () => {
  return {
    useToast: () => ({
      addToast: mockedAddToast,
    }),
  };
});

jest.mock('next/router', () => {
  return {
    useRouter: () => ({ push: mockedPush }),
  };
});

describe('SignIn Page', () => {

  it('should be able to sign in', async () => {
    const { getByPlaceholderText, getByText } = render(<Login />);

    const emailField = getByPlaceholderText('user.name@mail.com');
    const passwordField = getByPlaceholderText('senha');
    const buttonElement = getByText('ENTRAR');

    fireEvent.change(emailField, { target: { value: 'jess@mail.com' } });
    fireEvent.change(passwordField, { target: { value: 'password' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedPush).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('should not be able to sign in with invalid credentials', async () => {
    const { getByPlaceholderText, getByText } = render(<Login />);

    const emailField = getByPlaceholderText('user.name@mail.com');
    const passwordField = getByPlaceholderText('senha');
    const buttonElement = getByText('ENTRAR');

    fireEvent.change(emailField, { target: { value: 'not-valid-email' } });
    fireEvent.change(passwordField, { target: { value: 'password' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedPush).not.toHaveBeenCalled();
    });
  });


});
