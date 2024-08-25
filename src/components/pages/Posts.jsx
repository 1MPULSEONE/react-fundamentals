import React, { useEffect, useRef, useState } from 'react';
import '../../styles/App.css';
import PostService from '../../api/PostService';
import { useFetching } from '../hooks/useFetching';
import { getPagesCount } from '../utils/pages';
import { usePosts } from '../hooks/usePost';
import Button from '../../components/UI/button/Button';
import Modal from '../../components/UI/modal/Modal';
import PostForm from '../../components/PostForm';
import PostFilter from '../../components/PostFilter';
import Loader from '../../components/UI/loader/Loader';
import PostsList from '../../components/PostsList';
import Pagination from '../../components/UI/pagination/Pagination';
import { useObserver } from '../hooks/useObserver';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotatPages(getPagesCount(totalCount, limit));
    });
    const [totalPages, setTotatPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef();

    useObserver(lastElement, page < totalPages, isPostLoading, () => setPage(page + 1));

    useEffect(() => {
        fetchPosts();
    }, [page]);

    const deletePost = post => {
        setPosts(posts.filter(el => el.id !== post.id));
    };

    const createPost = newPost => {
        setPosts([...posts, newPost]);
    };

    const changePage = page => {
        setPage(page);
    };

    return (
        <div className='App'>
            <Button onClick={() => setModal(true)}>Создать пост</Button>
            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} setModal={setModal} />
            </Modal>
            <div>
                <hr style={{ margin: '15px 0' }} />
                <PostFilter filter={filter} setFilter={setFilter} />
            </div>
            {postError && <h1>Возникла ошибка</h1>}
            <PostsList posts={sortedAndSearchedPosts} title={'Посты про JS'} remove={deletePost} />
            <div ref={lastElement} style={{ height: 20, background: 'red' }} />
            {isPostLoading && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Loader />
                </div>
            )}
            <Pagination page={page} changePage={changePage} totalPages={totalPages} />
        </div>
    );
};

export default Posts;
