import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/globalStyles';
import Info from './Info';

const ControlPanel = (props) => {
  const {
    pageNumber, numPages, setPageNumber, scale, setScale,
  } = props;

  const page = {
    first: 1,
    last: numPages,
    next: pageNumber + 1,
    previous: pageNumber - 1,
    current: pageNumber,
  };

  const zoom = {
    min: 0.5,
    max: 2.5,
    previous: scale - 0.1,
    next: scale + 0.1,
  };

  const isFirstPage = page.current === page.first;
  const isLastPage = page.current === page.last;

  const isMinZoom = scale <= zoom.min;
  const isMaxZoom = scale >= zoom.max;

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
      <Icon
        className="fas fa-search-minus"
        disabled={isMinZoom}
        onClick={() => setScale(zoom.previous)}
      />
      <span>{(scale * 100).toFixed()}%</span>
      <Icon
        className="fas fa-search-plus"
        disabled={isMaxZoom}
        onClick={() => setScale(zoom.next)}
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
