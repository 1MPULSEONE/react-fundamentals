import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../../api/PostService';
import Loader from '../UI/loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPost, isPostLoading, postError] = useFetching(async id => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });
    const [fetchComments, areCommentsLoading, commentsError] = useFetching(async id => {
        const response = await PostService.getCommentsByPostId(id);
        console.log(response.data);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPost(params.postId);
        fetchComments(params.postId);
    }, []);

    useEffect(() => {
        console.log(post);
    }, [post]);

    return (
        <div>
            {isPostLoading ? (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Loader />
                </div>
            ) : (
                <>
                    <h1>{params.postId}</h1>
                    <div className={'post__content'}>
                        <strong>
                            {post.id}. {post.title}
                        </strong>
                        <div>{post.body}</div>
                    </div>
                </>
            )}
            {areCommentsLoading ? (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Loader />
                </div>
            ) : (
                <>
                    <h1>Комментарии</h1>
                    {comments.map(comm => (
                        <>
                            <div style={{ marginTop: 15 }} key={comm.id}>
                                <h5>{comm.email}</h5>
                                <div>{comm.body}</div>
                            </div>
                        </>
                    ))}
                </>
            )}
        </div>
    );
};

export default PostIdPage;
