import styled from 'styled-components';

export const Button = styled.button`
  color: #ffffff;
  background-color: ${(props) =>
    props.type === 'primary' ? '#F0A023' : 'inherit'};
  border: ${(props) =>
    props.type === 'primary' ? '2px solid #F0A023' : '2px solid orange'};
  border-radius: 19px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  padding: 0.75rem 1.2rem;

  &:hover {
    cursor: pointer;
  }
`;
