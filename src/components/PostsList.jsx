import PostItem from './PostItem'

const PostsList = (props) => {
    return (
        <div>
             <h1 style={{textAlign:'center'}}>{props.title}</h1>
             {props.posts.length === 0 ? <h1>Постов нет :c </h1> : props.posts.map((post, index) => (<PostItem key={post.id} post={post} labelNumber={index + 1} deletePost={props.deletePost}/>))}
        </div>
    )
}

export default PostsList