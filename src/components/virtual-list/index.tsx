// import React from 'react';
import { List } from 'react-virtualized';
import { loremIpsum } from 'lorem-ipsum';
import 'react-virtualized/styles.css'; // Import styles
import styles from './styles.module.css';
import IntersectionLazyLoad from '../common/lntersection-lazy-load';

// Your list data
const list = Array.from({ length: 50 }, (_, index) => ({
  id: index.toString(),
  name: `Item ${index}`,
  text: loremIpsum({
    count: 1,
    units: 'sentences',
    sentenceLowerBound: 4,
    sentenceUpperBound: 8
  })
}));

// Main component
function MyVirtualizedList() {
  
  function rowRenderer({ index, key, style }:{index: number, key: string, style: React.CSSProperties}) {
  return (
    <div id="xyz" key={key} style={style} className={styles.container}>
      <IntersectionLazyLoad imgHeight={200} src={"https://yt3.googleusercontent.com/L9p5C1DxCnZgj3B7nbPA-hxHU9-raoFkwZraN6jHlAPLIXIU9kE3R4YqXltKG1Ps7yahvEeR5Vc=s900-c-k-c0x00ffffff-no-rj"} alt={list[index].name} />
    </div>
  );
}
  return (
    <List
      width={600}
      height={900}
      rowCount={list.length}
      rowHeight={200}
      rowRenderer={rowRenderer}
    />
  );
}

export default MyVirtualizedList;