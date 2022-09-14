import React from 'react';

import {
  DetailsContainer,
  FirstInput,
  SecondInput,
} from '../Styles/ExpenseDetails.style';

const ExpenseDetails = ({ onInputChange, id, value }) => {
  return (
    <DetailsContainer>
      <div className='first'>
        <FirstInput type='text' placeholder='Expense name' />
        <SecondInput
          type='number'
          placeholder='&euro;0.00'
          value={value}
          onChange={(e) => onInputChange(id, e)}
        />
      </div>
    </DetailsContainer>
  );
};

export default ExpenseDetails;
