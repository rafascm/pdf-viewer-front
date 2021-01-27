import React from 'react';
import styled from 'styled-components';

const PageInfo = ({ page, onPageChange }) => (
  <Container>
    Página{' '}
    <input
      name="pageNumber"
      type="number"
      min={page.first}
      max={page.last}
      value={page.current}
      onChange={onPageChange}
    />{' '}
    de {page.last}
  </Container>
);
export default PageInfo;

const Container = styled.span`
  text-align: center;

  & > input {
    text-align: center;
    width: 4rem;
  }

  & > input::-webkit-outer-spin-button,
  & > input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  & > input[type="number"] {
    -moz-appearance: textfield;
  }
`;
