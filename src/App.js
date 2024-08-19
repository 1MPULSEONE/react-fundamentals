import React, { useMemo } from 'react';
import './styles/App.css';
import { useState } from 'react';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts

  }, [filter.sort, posts]) 
  
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(el => el.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const deletePost = (post) => {
    setPosts(posts.filter(el => el.id !== post.id))
  }

  const createPost = (newPost) => {
    console.log(newPost)
    setPosts([...posts, newPost])
  }

  
  return (
    <div className="App">
      <PostForm create={createPost} posts={posts}/>
      <div>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      </div>
      <PostsList posts={sortedAndSearchedPosts} title={"Посты про JS"} deletePost={deletePost}/>
    </div>
  );
}

export default App;
