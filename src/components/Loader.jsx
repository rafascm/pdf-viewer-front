import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/globalStyles';

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <Container id="loader">
      <LoadingLogo src="https://react-pdf.org/images/logo.png" alt="loader" />
      <Text>Loading...</Text>
    </Container>
  );
};

export default Loader;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  background-color: ${colors.pTransparent}
`;

const Text = styled.h2``;

const LoadingLogo = styled.img`
  height: 5rem;
  animation: rotation 2s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
