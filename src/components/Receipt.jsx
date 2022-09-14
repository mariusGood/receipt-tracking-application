import React, { useState } from 'react';
import * as S from '../Styles/Receipt.style';
import Footer from './Footer';
import ReceiptDetails from './ReceiptDetails';

const Receipt = () => {
  const [receiptList, setReceiptList] = useState([]);

  const clickHandler = () => {
    setReceiptList([...receiptList, { id: receiptList.length, value: '' }]);
  };

  const getTotalValue = () => {
    return (
      receiptList &&
      receiptList
        .map((item) => item.value)
        .filter((item) => !isNaN(item) && item !== '')
        .reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0)
    );
  };

  const onInputChange = (id, value) => {
    const newList = receiptList.map((item) => {
      if (item.id === id) return { id, value: value };
      else return item;
    });
    setReceiptList(newList);
  };

  return (
    <S.Receipt>
      {receiptList &&
        receiptList.map((e) => (
          <ReceiptDetails
            value={e.value}
            id={e.id}
            key={e.id}
            onTotalChange={onInputChange}
          />
        ))}
      <Footer total={getTotalValue} clickHandler={clickHandler} />
    </S.Receipt>
  );
};

export default Receipt;
