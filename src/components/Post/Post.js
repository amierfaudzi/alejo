import React from 'react';
import './Post.scss';

export default function Post({post}) {

    return (
        <div className="post">
            <img src="http://placekitten.com/80/80" alt="" className="post__image"/>
                <div className="post__content">
                <p className="post__poster">Amier Faudzi</p>
                <p>{post.content}</p>
                <p>{timeConverter(Number(post.date))}</p>
            </div>
        </div>
    )
}


function timeConverter (timeStamp) {
    const date = new Date(timeStamp);
    //changing the date into a DD/MM/YR format
    const formattedTime = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
    return formattedTime;
}
