import { useMemo, useRef } from "react";
// import { DOTS } from "../../../constants";

interface PaginationProps {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  siblingCount?: number;
};

const createRange = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({length}, (_, i) => start + i);
};

const usePagination = ({totalCount, pageSize, currentPage, siblingCount = 1}: PaginationProps): any => {
  const ref = useRef(currentPage);
  /* 
    This pagination looks like flipkart pagination.
  */
 return useMemo(() => {

    const totalPageCount = Math.ceil(totalCount / pageSize);

    const totalPeginationNumbers = 10;
    if( currentPage >= 1 && currentPage < totalPeginationNumbers) {
      return createRange(1, totalPeginationNumbers);
    }

    if(currentPage < totalPageCount) {
      ref.current = currentPage;
      const rightIndex = Math.min(currentPage + totalPeginationNumbers / 2 - 1, totalPageCount);
      const myIndex = 4 - (rightIndex - currentPage);
      console.log(myIndex);
      return createRange((currentPage - totalPeginationNumbers / 2 - myIndex), rightIndex);
    }

    if(currentPage === totalPageCount) {
      return createRange(totalPageCount - totalPeginationNumbers + 1 , totalPageCount);
    }

    // if((currentPage % totalPeginationNumbers === 0 || currentPage % totalPeginationNumbers === 5) && currentPage < totalPageCount) {
    //   ref.current = currentPage;
    //   return createRange(currentPage - totalPeginationNumbers / 2, Math.min(currentPage + totalPeginationNumbers / 2, totalPageCount));
    // }

    // return createRange(ref.current - totalPeginationNumbers / 2, Math.min(ref.current + totalPeginationNumbers / 2, totalPageCount));



    // second approach
    // all siblingCount + fisrtPage + lastPage + currentPage + 2*DOTS
    // const totalPeginationNumbers = 2 * siblingCount + 5; 

    // if(totalPeginationNumbers >= totalPageCount) {
    //   return createRange(1, totalPageCount);
    // }

    // if(currentPage < totalPeginationNumbers - siblingCount - 1) {
    //   const leftIndexes = createRange(1, totalPeginationNumbers - 2);
    //   return [...leftIndexes, DOTS, totalPageCount];
    // }

    // if(totalPageCount - currentPage - siblingCount > 2) {
    //   const middleIndexes = createRange(currentPage - siblingCount, currentPage + siblingCount);
    //   return [1, DOTS, ...middleIndexes, DOTS, totalPageCount];
    // }

    // if(totalPageCount - currentPage - siblingCount <= 2) {
    //   const rightIndexes = createRange(totalPageCount - 2*(siblingCount + 1), totalPageCount - 1);
    //   return [1, DOTS, ...rightIndexes, totalPageCount];
    // }

  }, [totalCount, pageSize, currentPage, siblingCount]);
}

export default usePagination;


// My first logic

// Calculate total number of pages
// const totalPageCount = Math.ceil(totalCount / pageSize);

// const totalPageNumbers = 2 * siblingCount + 5;
// // case 1:
// if(totalPageNumbers >= totalPageCount) {
//   return createRange(1, totalPageCount);
// }
// // case 2:
// if(currentPage < totalPageNumbers - siblingCount - 1) {
//   const leftPageIndexes: number[] = createRange(1, totalPageNumbers - siblingCount - 1);
//   return [...leftPageIndexes, DOTS, totalPageCount];
// }
// // case 3:
// if(totalPageCount - currentPage > siblingCount + 2) {
//   const middleIndexes = createRange(currentPage - siblingCount , currentPage + siblingCount);
//   return [1, DOTS , ...middleIndexes, DOTS, totalPageCount];
// }
// // case 4:
// const rightIndexs = createRange(totalPageCount -  totalPageNumbers + 2 + 1 , totalPageCount - 1);
// return [1, DOTS , ...rightIndexs, totalPageCount];

