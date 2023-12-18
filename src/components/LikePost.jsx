import React from 'react'
import LikePostMade from './highOrderComp';

const LikePost= ({handlelikeCount, likeCounter, label})=> (

    <div>
      <button onClick={handlelikeCount}>Like {label} {likeCounter}</button>
    </div>
 
);

export default LikePostMade(LikePost, 'Post');
