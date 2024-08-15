import React from 'react';
import './styles/App.css';
import { useState } from 'react';
import PostsList from './components/PostsList';
import Button from './components/UI/button/Button';
import Input from './components/UI/input/Input';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript - язык программирования', body: 'description'},
    {id: 2, title: 'JavaScript - язык программирования', body: 'description'},
    {id: 3, title: 'JavaScript - язык программирования', body: 'description'},
    {id: 4, title: 'JavaScript - язык программирования', body: 'description'},
    {id: 5, title: 'JavaScript - язык программирования', body: 'description'},
  ])

  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (event) => {
    event.preventDefault()
    console.log(post)
    setPosts((prev) => {
      if (prev.length > 0) {
      setPosts([...prev, {id: prev[prev.length - 1].id + 1, ...post}]) 
      }

      return [...prev, {id: 1, ...post}]
    })

    setPost({title: '', body: ''})
    
  }

  const deletePost = (post) => {
    setPosts(posts.filter(el => el.id !== post.id))
  }
  

  return (
    <div className="App">
      <form>
        <Input type='text' placeholder='Название поста' onChange={e => setPost({...post, title: e.target.value})} value={post.title}/>
        <Input type='text' placeholder='Описание поста' onChange={e => setPost({...post, body: e.target.value})} value={post.body} />
        <Button onClick={addNewPost}> Создать пост </Button>
      </form>
      <PostsList posts={posts} title={"Посты про JS"} deletePost={deletePost}/>

    </div>
  );
}

export default App;
