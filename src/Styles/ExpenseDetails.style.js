import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0.5rem;
  background-color: #f4eef7;
  border-radius: 4px;

  div.first {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e8dfed;
    padding: 0.5em;
  }
`;

export const FirstInput = styled.input`
  border-radius: 4px;
  border: none;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.4;
  padding: 0.5rem;
  width: 65%;
  text-align: start;

  ::placeholder {
    color: #52526a;
  }
`;

export const SecondInput = styled.input`
  border-radius: 4px;
  border: none;
  font-size: 14px;
  opacity: 0.4;
  color: #52526a;
  font-weight: 500;
  padding: 0.5rem;
  width: 20%;
  text-align: end;
`;
