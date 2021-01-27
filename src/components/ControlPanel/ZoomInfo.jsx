import React from 'react';

const ZoomInfo = ({ scale }) => (
  <span>{(scale * 100).toFixed()}%</span>
);

export default ZoomInfo;
