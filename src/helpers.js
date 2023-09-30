import React from 'react';

// returns a randomly selected item from array of items
// ['eggs', 'milk', 'ceral', 'chicken', 'spinach'] => 'chicken'
const Choice = ({items}) => {
  const randIdx = Math.floor(Math.random() * items.length);

  return (
    // <>
    //   <h1>Gorcery Items: {items}</h1>
    //   <p>Random Item: {items[randIdx]}</p>
    // </>
    <>
      <p>I'd like one {items[randIdx]}</p>
      <p>Here you go: {items[randIdx]}</p>
      <p>Delicious! May I have another?</p>
    </>
    
    // items[randIdx]
    
  )
}

// removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
// ['paper', 'tissues', 'toothpaste', 'floss'] => 'toothpaste', new array is ['paper', 'tissues', 'floss']
const Remove = ({items, item}) => {
  const itemIdx = items.findIndex((el) => el === item);
  let copyItems = [...items];

  if (itemIdx !== -1) {
    copyItems.splice(itemIdx, 1);
    // return copyItems;
  }

  
  return (
    // <>
    //   <h1>Target Items: {items}</h1>
    //   <p>Removed Item: {items.find((el) => el === item)}</p>

    //   <h1>Remaining Items: {copyItems}</h1>
    // </>
    <>
      <p>I'm sorry, we're all out of {item}. We have {copyItems} left.</p>
    </>

  )
}


export {Choice, Remove};