import React from 'react';
import Button from './UI/button/Button';
import { useNavigate } from 'react-router-dom';

const PostItem = ({ deletePost, labelNumber, ...props }) => {
    const navigate = useNavigate();
    return (
        <div className={'post'}>
            <div className={'post__content'}>
                <strong>
                    {labelNumber}. {props.post.title}
                </strong>
                <div>{props.post.body}</div>
            </div>
            <div className={'post__btns'}>
                <Button onClick={() => navigate(`/posts/${props.post.id}`)} style={{ padding: '0.5rem' }}>
                    Открыть
                </Button>
                <Button onClick={() => deletePost(props.post)} style={{ padding: '0.5rem' }}>
                    удалить
                </Button>
            </div>
        </div>
    );
};

export default PostItem;
