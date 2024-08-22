import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../../api/PostService';
import Loader from '../UI/loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [fetchPost, isLoading, error] = useFetching(async id => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    useEffect(() => {
        fetchPost(params.postId);
    }, []);

    useEffect(() => {
        console.log(post);
    }, [post]);

    return (
        <div>
            {isLoading ? (
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
        </div>
    );
};

export default PostIdPage;
