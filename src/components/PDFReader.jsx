import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styled from 'styled-components';
import ControlPanel from './ControlPanel';

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
  const [scale, setScale] = useState(1.0);

  const onDocumentLoadSuccess = (file) => {
    setNumPages(file.numPages);
  };

  return (
    <Container>
      <ControlPanel
        pageNumber={pageNumber}
        numPages={numPages}
        scale={scale}
        setPageNumber={setPageNumber}
        setScale={setScale}
      />
      <Document
        file="/assets/docs/sample.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} scale={scale} />
      </Document>
    </Container>
  );
};

export default PDFReader;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 0.5rem;
`;
