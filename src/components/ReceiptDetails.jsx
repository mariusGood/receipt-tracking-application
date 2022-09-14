import React, { useState, useEffect, useCallback } from 'react';

import {
  Container,
  DropDownHeader,
  DropDownList,
  ExpenseTotal,
  Form,
  ListItem,
} from '../Styles/ReceiptDetail.style';
import Button from './Button';
import ExpenseDetails from './ExpenseDetails';

const ReceiptDetails = ({ onTotalChange, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputList, setInputList] = useState([]);

  const options = ['Food', 'Entertaiment', 'Houseware'];

  const onOptionClicked = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const formHandler = (e) => {
    e.preventDefault();
    if (selectedOption !== null) {
      setInputList([...inputList, { id: inputList.length, value: '' }]);
    }
    return;
  };

  const getDisplayValue = useCallback(() => {
    return (
      inputList &&
      inputList
        .map((item) => item.value)
        .filter((item) => !isNaN(item) && item !== '')
        .reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0)
    );
  }, [inputList]);

  const onInputChange = (id, e) => {
    const newList = inputList.map((item) => {
      if (item.id === id) return { id, value: parseInt(e.target.value, 10) };
      else return item;
    });
    setInputList(newList);
  };

  useEffect(() => {
    onTotalChange(id, getDisplayValue());
  }, [getDisplayValue, id]);

  return (
    <Container>
      <Form onSubmit={formHandler}>
        <div>
          <DropDownHeader onClick={() => setIsOpen(!isOpen)} required>
            {selectedOption || 'Select'}
            <span className='arrow-head'>&#8964;</span>
          </DropDownHeader>
          {isOpen && (
            <div>
              <DropDownList>
                {options.map((option, indx) => (
                  <ListItem
                    onClick={() => onOptionClicked(option)}
                    value={option}
                    key={indx}
                  >
                    {option}
                  </ListItem>
                ))}
              </DropDownList>
            </div>
          )}
        </div>
        <Button type='secondary'>Add expense</Button>
      </Form>
      {inputList &&
        inputList.map((e) => (
          <ExpenseDetails
            value={e.value}
            id={e.id}
            key={e.id}
            onInputChange={onInputChange}
          />
        ))}
      {inputList.length !== 0 && (
        <ExpenseTotal>Total &euro; {getDisplayValue().toFixed(2)}</ExpenseTotal>
      )}
    </Container>
  );
};

export default ReceiptDetails;
