import React from 'react';
import './styles/App.css';
import { useState } from 'react';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript - язык программирования', body: 'description'},
    {id: 2, title: 'JavaScript - язык программирования', body: 'description'},
    {id: 3, title: 'JavaScript - язык программирования', body: 'description'},
    {id: 4, title: 'JavaScript - язык программирования', body: 'description'},
    {id: 5, title: 'JavaScript - язык программирования', body: 'description'},
  ])

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
