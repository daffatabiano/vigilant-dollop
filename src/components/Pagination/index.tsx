import style from 'src/styles/pagination.module.css';

const Pagination = ({ page, pages, setPage }: any) => {
    const pageNumbers = [];
    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
    }

    let startPage, endPage;
    if (pages <= 5) {
        startPage = 1;
        endPage = pages;
    } else {
        if (page <= 3) {
            startPage = 1;
            endPage = 5;
        } else if (page + 1 >= pages) {
            startPage = pages - 4;
            endPage = pages;
        } else {
            startPage = page - 2;
            endPage = page + 2;
        }
    }

    const previousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const nextPage = () => {
        if (page < pages) {
            setPage(page + 1);
        }
    };

    const firstPage = () => {
        setPage(1);
    };

    const lastPage = () => {
        setPage(pages);
    };

    return (
        <nav aria-label="pagination" className="mt-3">
            <ul className={style.pagination}>
                <li
                    className={`${style['pagination-item']} ${
                        page === 1 && 'disabled'
                    }   `}
                    onClick={() => firstPage()}
                >
                    <p className={`page-link `}>First</p>
                </li>
                <li
                    className={`${style['pagination-item']} ${
                        page === 1 && 'disabled'
                    }  `}
                    onClick={() => previousPage()}
                >
                    <p className={`page-link `}>Previous</p>
                </li>
                {pageNumbers.slice(startPage - 1, endPage).map((number) => (
                    <li
                        key={number}
                        className={`${style['pagination-item']} ${
                            page === number && 'active'
                        } ${
                            page !== number - 1 &&
                            page !== number &&
                            page !== number + 1 &&
                            'd-none d-md-block'
                        } `}
                        onClick={() => setPage(number)}
                    >
                        <p className="page-link">{number}</p>
                    </li>
                ))}
                <li
                    className={`${style['pagination-item']} ${
                        page === pages && 'disabled'
                    } `}
                >
                    <p className={`page-link `} onClick={() => nextPage()}>
                        Next
                    </p>
                </li>
                <li
                    className={`${style['pagination-item']} ${
                        page === pages && 'disabled'
                    }  `}
                    onClick={() => lastPage()}
                >
                    <p className={`page-link `}>Last</p>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
