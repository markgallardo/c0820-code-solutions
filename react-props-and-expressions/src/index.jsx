import React from 'react';
import ReactDom from 'react-dom';

function CustomButton(prop) {
  return (
    <button>{prop.text}</button>
  );
}

const element = (
  <div>
    <CustomButton text="I"/>
    <CustomButton text="know"/>
    <CustomButton text="React!"/>
  </div>
);

ReactDom.render(
  element,
  document.getElementById('root')
);
