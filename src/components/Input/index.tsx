import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

import { useField } from '@unform/core';

import { Container, Error, TextError } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: object;
}

const Input: React.FC<InputProps> = ({
  name,
  containerStyle = {},
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);


  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName, // nome do campo
      ref: inputRef.current, // forma de acessar o elemento diretamente
      path: 'value', // é o que vai buscar lá dentro do input
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container
        style={containerStyle}
        isErrored={!!error}
        isFocused={isFocused}
        data-testid="input-container"
      >

        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />

        {error && (
          <Error />
        )}
      </Container>
      {error && (
        <TextError>{error}</TextError>
      )}
    </>
  );
};

export default Input;
