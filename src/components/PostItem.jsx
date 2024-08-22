import React from 'react';
import Button from './UI/button/Button';

const PostItem = ({ deletePost, labelNumber, ...props }) => {
    return (
        <div className={'post'}>
            <div className={'post__content'}>
                <strong>
                    {labelNumber}. {props.post.id}
                </strong>
                <div>{props.post.body}</div>
            </div>
            <div className={'post__btns'}>
                <Button onClick={() => deletePost(props.post)}>удалить</Button>
            </div>
        </div>
    );
};

export default PostItem;
