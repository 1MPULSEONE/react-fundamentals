import React from 'react';
import './styles/App.css';
import { useState } from 'react';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';

function App() {

  const [posts, setPosts] = useState([])

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
      <PostsList posts={posts} title={"Посты про JS"} deletePost={deletePost}/>
    </div>
  );
}

export default App;
