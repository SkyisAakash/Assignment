import React from 'react';
import { CSSTransition } from 'react-transition-group';

const SingleImage = (props) => {
    const {url, center, index, caption} = props;
    return (
        <CSSTransition
            in={true}
            timeout={2500}
            appear={true}
            classNames='fade'>
        <div key='photo' className={'photo-container'}>
            <img src={url} key={index} />
            <p>{caption}</p>
            {center ? <p>I am centered</p> : null}
        </div>
        </CSSTransition>    
    )
}

export default SingleImage;