import { useMemo } from 'react';
import { getPagesArray } from '../../utils/pages';

const Pagination = ({ totalPages, page, changePage }) => {
    let pagesArray = useMemo(() => {
        return getPagesArray(totalPages);
    }, [totalPages]);

    return (
        <div className={'page__wrapper'}>
            {pagesArray.map(p => (
                <button
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                    style={{ padding: '10px' }}
                >
                    {p}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
