// import React from 'react';
import { List } from 'react-virtualized';
import { loremIpsum } from 'lorem-ipsum';
import 'react-virtualized/styles.css'; // Import styles
import styles from './styles.module.css';
import IntersectionLazyLoad from '../common/lntersection-lazy-load';

// Your list data
const list = Array.from({ length: 5000 }, (_, index) => ({
  id: index.toString(),
  name: `Item ${index}`,
  text: loremIpsum({
    count: 1,
    units: 'sentences',
    sentenceLowerBound: 4,
    sentenceUpperBound: 8
  })
}));
function rowRenderer({ index, key, style }:{index: number, key: string, style: React.CSSProperties}) {
  console.log({ index, key, style })
  return (
    <div id="xyz" key={key} style={style} className={styles.container}>
      {/* <img width={200} height={200} src={"https://yt3.googleusercontent.com/L9p5C1DxCnZgj3B7nbPA-hxHU9-raoFkwZraN6jHlAPLIXIU9kE3R4YqXltKG1Ps7yahvEeR5Vc=s900-c-k-c0x00ffffff-no-rj"} alt={list[index].name} /> */}
      <IntersectionLazyLoad imgHeight={200} src={"https://yt3.googleusercontent.com/L9p5C1DxCnZgj3B7nbPA-hxHU9-raoFkwZraN6jHlAPLIXIU9kE3R4YqXltKG1Ps7yahvEeR5Vc=s900-c-k-c0x00ffffff-no-rj"} alt={list[index].name} />
      {/* <div className='imageWrapper'>
        <img width={200} height={200} src={"https://yt3.googleusercontent.com/L9p5C1DxCnZgj3B7nbPA-hxHU9-raoFkwZraN6jHlAPLIXIU9kE3R4YqXltKG1Ps7yahvEeR5Vc=s900-c-k-c0x00ffffff-no-rj"} alt={list[index].name} />
      </div> */}
      {/* <div className={styles.content}>
        <h3>{list[index].name}</h3>
        <div>{list[index].text}</div>
      </div> */}
    </div>
  );
}

// Main component
function MyVirtualizedList() {
 
  return (
    <List
      width={600}
      height={500}
      rowCount={list.length}
      rowHeight={200}
      rowRenderer={rowRenderer}
    />
  );
}

export default MyVirtualizedList;