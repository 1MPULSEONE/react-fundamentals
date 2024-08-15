import React from 'react'
import Button from './UI/button/Button'


const PostItem = ({deletePost, ...props}) => {
    return (
        <div className={'post'}>
        <div className={"post__content"}>
            <strong>{props.post.id}. {props.post.title}</strong>
            <div>
              {props.post.body}
            </div>
        </div>
        <div className={'post__btns'}>
          <Button onClick={() => (deletePost(props.post))}>удалить</Button>
        </div>
      </div>
    )
}

export default PostItem