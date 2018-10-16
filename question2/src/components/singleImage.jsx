import React from 'react';
import { CSSTransition } from 'react-transition-group';

const SingleImage = (props) => {
    const {url, center, index, caption} = props;
    return (
        <CSSTransition
            in={true}
            timeout={2500}
            className='fade'
            appear={true}>
        <img src={url} key={index} />
        <p>{caption}</p>
        {center ? <p>I am centered</p> : null}
        </CSSTransition>
    )
}

export default SingleImage;