import React, { useState } from 'react'
import Input from './UI/input/Input'
import Button from './UI/button/Button'

const PostForm = ({create, posts}) => {

  const [post, setPost] = useState({title: '', body: ''})


  const addNewPost = (event) => {
    event.preventDefault()
    const newPost = (posts.length > 0) ? {id: posts[posts.length - 1].id + 1, ...post} : [...posts, {id: 1, ...post}]
    create(newPost)
    setPost({title: '', body: ''})
  }
    return (
        <form>
        <Input type='text' placeholder='Название поста' onChange={e => setPost({...post, title: e.target.value})} value={post.title}/>
        <Input type='text' placeholder='Описание поста' onChange={e => setPost({...post, body: e.target.value})} value={post.body} />
        <Button onClick={addNewPost}> Создать пост </Button>
      </form>
       
    )
}

export default PostForm