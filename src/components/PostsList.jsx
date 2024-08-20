import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PostItem from './PostItem'

const PostsList = ({posts, title, remove}) => {
    return (
        <div>
        <h1 style={{ textAlign: 'center' }}>{title}</h1>
        {posts.length === 0 ? (
          <h1>Постов нет :c</h1>
        ) : (
          <TransitionGroup>
            {posts.map((post, index) => (
              <CSSTransition key={post.id} timeout={500} classNames={'post'}>
                <PostItem post={post} labelNumber={index + 1} deletePost={remove} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </div>
    )
}

export default PostsList