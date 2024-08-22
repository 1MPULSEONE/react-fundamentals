import React, { useEffect } from 'react';
import './styles/App.css';
import { useState } from 'react';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import Modal from './components/UI/modal/Modal';
import Button from './components/UI/button/Button';
import { usePosts } from './components/hooks/usePost';
import PostService from './api/PostService';
import Loader from './components/UI/loader/Loader';
import { useFetching } from './components/hooks/useFetching';
import { getPagesCount } from './components/utils/pages';
import Pagination from './components/UI/pagination/Pagination';

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotatPages(getPagesCount(totalCount, limit));
    });
    const [totalPages, setTotatPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

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
        fetchPosts(page, limit);
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
            {isPostLoading ? (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Loader />
                </div>
            ) : (
                <PostsList posts={sortedAndSearchedPosts} title={'Посты про JS'} remove={deletePost} />
            )}
            <Pagination page={page} changePage={changePage} totalPages={totalPages} />
        </div>
    );
}

export default App;
