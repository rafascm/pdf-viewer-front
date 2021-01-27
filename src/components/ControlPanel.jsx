import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/globalStyles';
import Info from './ControlPanel/Info';

const ControlPanel = (props) => {
  const { pageNumber, numPages, setPageNumber } = props;

  const page = {
    first: 1,
    last: numPages,
    next: pageNumber + 1,
    previous: pageNumber - 1,
    current: pageNumber,
  };

  const isFirstPage = page.current === page.first;
  const isLastPage = page.current === page.last;

  const onPageChange = (e) => setPageNumber(Number(e.target.value));

  return (
    <Container>
      <Icon
        className="fas fa-angle-double-left"
        disabled={isFirstPage}
        onClick={() => setPageNumber(page.first)}
      />
      <Icon
        className="fas fa-angle-left"
        disabled={isFirstPage}
        onClick={() => setPageNumber(page.previous)}
      />
      <Info page={page} onPageChange={onPageChange} />
      <Icon
        className="fas fa-angle-right"
        disabled={isLastPage}
        onClick={() => setPageNumber(page.next)}
      />
      <Icon
        className="fas fa-angle-double-right"
        disabled={isLastPage}
        onClick={() => setPageNumber(page.last)}
      />
    </Container>
  );
};

export default ControlPanel;

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  padding: 1rem 3rem;
  margin: 0.5rem 1rem 1rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 0 ${colors.pTransparent};

  & > * + * {
    margin-left: 2rem;
  }
`;

const Icon = styled.i`
  pointer-events: ${(props) => (props.disabled ? 'none' : 'initial')};
  cursor: ${(props) => (props.disabled ? 'initial' : 'pointer')};
  color: ${(props) => (props.disabled ? colors.disabled : 'initial')};
`;
