import React from 'react';

import Wrapper from './Wrapper';
import Title from './Title';

const Card = ({title}) => (
  <Wrapper>
    <Title>{title}</Title>
  </Wrapper>
);

export default Card;