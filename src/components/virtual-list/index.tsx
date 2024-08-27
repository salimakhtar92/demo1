// import React from 'react';
import { List } from 'react-virtualized';
import { loremIpsum } from 'lorem-ipsum';
import 'react-virtualized/styles.css'; // Import styles

// Your list data
const list = Array(1000).fill().map((_, index) => ({
  id: index,
  name: `Item ${index}`,
  text: loremIpsum({
    count: 1,
    units: 'sentences',
    sentenceLowerBound: 4,
    sentenceUpperBound: 8
  })
}));
console.log(list);
// Function to render each row
function rowRenderer({ index, key, style }:{index: number, key: string, style: React.CSSProperties}) {
  console.log({ index, key, style })
  return (
    <div key={key} style={style}>
      <div className="content">
        <div>{list[index].name}</div>
        <div>{list[index].text}</div>
      </div>
    </div>
  );
  // return (
  //   <div key={key} style={style}>
  //     {list[index].name}
  //   </div>
  // );
}

// Main component
function MyVirtualizedList() {
  return (
    <List
      width={500}
      height={500}
      rowCount={list.length}
      rowHeight={60}
      rowRenderer={rowRenderer}
    />
  );
}

export default MyVirtualizedList;