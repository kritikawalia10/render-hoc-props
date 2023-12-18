import React, { useState } from 'react'

export default function RenderProps({render, label}) {

    const [likeCounter, setlikeCounter] = useState(0);
    const handleLikeCount = () => setlikeCounter(likeCounter + 1);

  return <div>{render({handleLikeCount, likeCounter, label})}</div>
}
