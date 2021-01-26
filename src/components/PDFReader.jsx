/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styled from 'styled-components';
import Loader from './Loader';
// import Loader from './Loader';

/**
 * Enabling pdf.js worker increases performance, rendering files in a separate thread
 * It's not possible to use a [webpack import] in a create-react-app
 * Best workaround is using CDN import
 * [webpack import] import { Document } from 'react-pdf/dist/esm/entry.webpack'
 * */

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFReader = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const onDocumentLoadSuccess = (file) => {
    setNumPages(file.numPages);
    setIsLoading(false);
  };

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <Document
        file="/assets/docs/OWASP.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </Container>
  );
};
export default PDFReader;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
