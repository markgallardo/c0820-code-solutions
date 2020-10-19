import react from 'react';
import reactDOM from 'react-dom';

const newElm = react.createElement('h1', '', 'HELLO! From React');

reactDOM.render(newElm, document.getElementById('root'));
