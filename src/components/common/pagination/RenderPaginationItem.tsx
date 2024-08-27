

interface RenderPaginationItemProps {
  page: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const RenderPaginationItem: React.FC<RenderPaginationItemProps> = ({ page, currentPage, onPageChange }) => {
  const changeHandler = (event: any) => {
    const value = event.target.textContent;
    if(value === '...') return;
    onPageChange(Number(value));
  }
  return <span className={`page ${page === currentPage ? 'active' : ''}`} key={page} onClick={changeHandler}>{page}</span>
};

export default RenderPaginationItem;