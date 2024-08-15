
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
          <button onClick={() => (deletePost(props.post))}>удалить</button>
        </div>
      </div>
    )
}

export default PostItem