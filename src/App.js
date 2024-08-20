import React, { useMemo } from 'react';
import './styles/App.css';
import { useState } from 'react';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import Modal from './components/UI/modal/Modal';
import Button from './components/UI/button/Button';

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(el => el.title.toLowerCase().includes(filter.query.toLowerCase()));
    }, [filter.query, sortedPosts]);

    const deletePost = post => {
        setPosts(posts.filter(el => el.id !== post.id));
    };

    const createPost = newPost => {
        console.log(newPost);
        setPosts([...posts, newPost]);
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
            <PostsList posts={sortedAndSearchedPosts} title={'Посты про JS'} remove={deletePost} />
        </div>
    );
}

export default App;
