import React from 'react';
import Button from './Button';
import * as S from '../Styles/Footer.style';

const Footer = ({ total, clickHandler }) => {
  return (
    <S.Footer>
      <div>
        Total <b>&euro;{total().toFixed(2)}</b>
      </div>
      <Button onClick={clickHandler} type='primary'>
        Add receipt
      </Button>
    </S.Footer>
  );
};

export default Footer;
