import React from 'react';
import './styles/App.css';
import { useState } from 'react';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';
import Select from './components/UI/select/Select';

function App() {

  const [posts, setPosts] = useState([])
  const [selectedSort, setSelectedSort] = useState('')

  const deletePost = (post) => {
    setPosts(posts.filter(el => el.id !== post.id))
  }

  const createPost = (newPost) => {
    console.log(newPost)
    setPosts([...posts, newPost])
  }

  const sortPosts = (value) => {
    setSelectedSort(value)
    setPosts([...posts].sort((a, b) => a[value].localeCompare(b[value])))
  }
  
  return (
    <div className="App">
      <PostForm create={createPost} posts={posts}/>
      <div>
      <hr style={{margin: '15px 0'}}/>
        <Select defaultValue={"Сортировка по:"} options={[
          {value: 'title', name:'По названию'},
          {value: 'body', name:'По описанию'}
        ]}
        value={selectedSort}
        onChange={sortPosts}
        />
      </div>
      <PostsList posts={posts} title={"Посты про JS"} deletePost={deletePost}/>
    </div>
  );
}

export default App;
