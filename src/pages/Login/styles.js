import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  padding: 30px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
`;

export const SubmitButton = styled.button`
  background: orange;
  border-radius: 4px;
  border: 0;
  padding: 10px;
  margin-top: 10px;
  color: #fff;
  font-weight: bold;
`;

export const Error = styled.p`
  color: red;
  padding: 10px 0;
  font-weight: bold;
  font-size: 18px;
`;
