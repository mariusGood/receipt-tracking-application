import React from 'react';
import * as S from '../Styles/Button.style';
import PropTypes from 'prop-types';

const Button = ({ children, type, onClick }) => {
  return (
    <S.Button type={type} onClick={onClick}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
};

export default Button;
