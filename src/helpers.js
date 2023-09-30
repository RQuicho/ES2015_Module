import React from 'react';

// returns a randomly selected item from array of items
// ['eggs', 'milk', 'ceral', 'chicken', 'spinach'] => 'chicken'
const Choice = ({items}) => {
  console.log('Choice items...', items);
  const randIdx = Math.floor(Math.random() * items.length);
  console.log('items.length...', items.length);
  console.log('randIdx...', randIdx);
  return (
    <>
      <h1>Gorcery Items: {items}</h1>
      <p>Random Item: {items[randIdx]}</p>
    </>
    
  )
}

// removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
// ['paper', 'tissues', 'toothpaste', 'floss'] => 'toothpaste', new array is ['paper', 'tissues', 'floss']
const Remove = ({items, item}) => {
  console.log('Remove items', items);
  const itemIdx = items.findIndex((el) => el === item);
  let copyItems = [...items];

  if (itemIdx !== -1) {
    copyItems.splice(itemIdx, 1);
  }
  
  return (
    <>
      <h1>Target Items: {items}</h1>
      <p>Removed Item: {items.find((el) => el === item)}</p>

      <h1>Remaining Items: {copyItems}</h1>
    </>
    
  )
}


export {Choice, Remove};