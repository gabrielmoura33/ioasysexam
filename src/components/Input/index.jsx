import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { useField } from '@unform/core';
import { Container, InputGroup, Error, SignButton } from './styles';


const Input = ({ name, icon: Icon, signButton, placeholder, children, ...rest }) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container >
      <InputGroup isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
        <label>{placeholder}</label>
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
        {signButton && <SignButton type="submit">Entrar</SignButton>}
      </InputGroup>
    </Container>
  );
};

export default Input;
