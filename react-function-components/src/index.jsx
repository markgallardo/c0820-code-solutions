import React from 'react';
import ReactDom from 'react-dom';

const CustomButton = () => {
  return <button>Click Me!</button>;
};

ReactDom.render(
  <CustomButton />,
  document.getElementById('root')
);
