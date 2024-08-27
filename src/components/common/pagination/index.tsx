import React, { useState, useMemo, useEffect } from 'react';
import RenderPaginationItem from './RenderPaginationItem';
import './styles.css';
import usePagination from '../../hooks/pagination/usePagination';

interface PaginationProps {
  totalItems: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ totalItems, pageSize, currentPage, onPageChange }) => {
  const totalPages = useMemo(() => Math.ceil(totalItems / pageSize), [totalItems, pageSize]);
  const paginationRange = usePagination({totalCount: totalItems, pageSize, currentPage});
  const prevHandler = () => {
    if(currentPage === 1) return;
    onPageChange(currentPage - 1);
  };

  const nextHandler = () => {
    if(currentPage === totalPages) return
    onPageChange(currentPage + 1);
  }

  const renderPagination = () => {
    return paginationRange.map((page: number, index: number) => {
      return <RenderPaginationItem key={index} page={page} currentPage={currentPage} onPageChange={onPageChange} />
    });
  };

  const firstPageHandler = () => {
    onPageChange(1);
  };

  const lastPageHandler = () => {
    onPageChange(totalPages);
  }

  return (
    <div>
      <button disabled={currentPage === 1} onClick={firstPageHandler}>&lt;&lt;</button>
      <button disabled={currentPage === 1} onClick={prevHandler}>&lt;</button>
      {renderPagination()}
      <button disabled={currentPage === totalPages} onClick={nextHandler}>&gt;</button>
      <button disabled={currentPage === totalPages} onClick={lastPageHandler}>&gt;&gt;</button>
    </div>
  )
};

const PaginationComponent = () => {
  const [data, setData] = useState({ total: 0, products: [], limit: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const onPageChange = (page: number) => {
    // window.scrollTo(0, 0);
    setCurrentPage(page);
  };
  const limit: number = 10;
  const getData = (page: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setLoading(true);
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`)
    .then(res => res.json())
    .then(data => {
      setLoading(false);
      setData(data);
    });
  }

  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  const {total, products} = data || {};

  return (
    <>
      <h1>Pagination</h1>
      <Pagination totalItems={total} pageSize={limit} currentPage={currentPage} onPageChange={onPageChange} />
      <div style={{height: "20px"}}>
        <h4>{loading ? "Loading..." : ""}</h4>
      </div>
      <ul>
        {products && products.map((product: any, index: number) => (
          <li key={index}>
            <div className='product'>
              <img height={200} width={200} src={product.thumbnail} loading="lazy" alt={product.name} />
              <h5>{product.title}</h5>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PaginationComponent;