import React, { useState } from "react";
const LikePostMade =(WrappedComponent, label) => {
    const NewComponent = (props) => {

    
    const [likeCounter, setlikeCounter] = useState(0);
    const handlelikeCount = () => {
        setlikeCounter(likeCounter + 1);
    }

    return (
            
            <WrappedComponent {...props} handlelikeCount = {handlelikeCount} likeCounter = {likeCounter} label = {label}/>
       
    );
 } 
        return NewComponent;
};

export default LikePostMade;