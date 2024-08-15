import PostItem from './PostItem'

const PostsList = (props) => {
    return (
        <div>
             <h1 style={{textAlign:'center'}}>{props.title}</h1>
             {props.posts.map((post) => (<PostItem key={post.id} post={post} deletePost={props.deletePost}/>))}
        </div>
    )
}

export default PostsList