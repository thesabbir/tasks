'use client';

import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  margin-bottom: 10px;
`;

const InputLabel = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  color: #575757;
  margin-bottom: 3px;
`;

const ErrorMessage = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  color: #cd4e4e;
`;

const Input = styled.input`
  color: #454545;
  font-size: 1.3rem;
  border: 2px solid #949494;
  border-radius: 5px;
  padding: 5px;
  width: 260px;
  height: 50px;

  &:focus {
    border: 2px solid #534fbf;
  }
`;

type TextInputProps = {
  label: string;
  name: string;
  type?: string;
  error: any;
  validations?: object;
  register: Function;
};

export const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  validations,
  register,
  error,
  type = 'text',
  ...props
}) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <Input type={type} {...props} {...register(name, validations)} />
      {error && <ErrorMessage>{error?.message}</ErrorMessage>}
    </InputContainer>
  );
};
