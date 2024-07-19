// ArraySample.js

import React from 'react';

const ArraySample = (props) => {
  return (
    <div>
      <h2>Items:</h2>
      <ul>
        {props.items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArraySample;

