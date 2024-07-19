import React from 'react';
import ArraySample from './components/ArraySample'; // Adjust the import path as per your actual file structure

function App() {
  const items = [
    { id: 1, name: "item 1" },
    { id: 2, name: "item 2" }
  ];

  return (
    <>
      <ArraySample items={items} /> {/* Pass items array as props to ArraySample */}
    </>
  );
}

export default App;

