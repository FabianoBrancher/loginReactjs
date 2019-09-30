import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  padding: 30px;

  div {
    margin: 0 auto;
  }
  p {
    padding: 30px 0;
  }
`;

export const Logout = styled.button`
  background: orange;
  border-radius: 4px;
  border: 0;
  padding: 10px;
  margin-top: 10px;
  color: #fff;
  font-weight: bold;
`;
