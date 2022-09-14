import styled from 'styled-components';

export const Container = styled.div`
  max-height: 90vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Form = styled.form`
  background-color: #250b38;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem;
  padding: 1rem;
`;

export const DropDownHeader = styled('div')`
  padding: 0.8rem 4rem 0.8rem 0.5rem;
  border-radius: 5px;
  font-weight: 500;
  font-size: 1rem;
  color: #52526a;
  background: #ffffff;
  font-weight: 600;
  position: relative;
  width: 5em;

  .arrow-head {
    font-size: 20px;
    color: #f0a023;
    position: absolute;
    top: 0.2em;
    right: 0.5em;
  }
`;

export const DropDownList = styled('ul')`
  margin-top: 0.5em;
  padding: 0.5rem;
  border-radius: 5px;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #52526a;
  font-size: 1rem;
  font-weight: 600;
  position: absolute;
  width: 90%;
  z-index: 10;
`;
export const ListItem = styled('li')`
  list-style: none;
  padding: 0.5rem;
  padding-right: 0;
  border-bottom: 1px solid #e5e5e5;

  :nth-child(3) {
    border-bottom: 0;
  }

  :hover {
    background-color: #f0a023;
    color: #ffffff;
    border-radius: 5px;
  }
`;

export const ExpenseTotal = styled.div`
  background-color: #f4eef7;
  margin: 0 0.5rem;
  padding: 1rem;
`;
