function Pagination() {
return (
<>
{/* PAGINATION */}
<div className="d-flex flex-wrap justify-content-center mb-3 js-pagination">
          <div className="page-item">
            <a className="page-link js-pagination-start" href="#">⏪</a>
          </div>
          <div className="page-item">
            <a className="page-link js-pagination-prev" href="#">◀</a>
          </div>
          <ul className="pagination order-first col-12 justify-content-center mb-2 js-pagination-list">
          </ul>
          <div className="page-item">
            <a className="page-link js-pagination-next" href="#">▶</a>
          </div>
          <div className="page-item">
            <a className="page-link js-pagination-end" href="#">⏩</a>
          </div>
        </div></>
);
}

export default Pagination;
