import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './singleImage.css';
const SingleImage = (props) => {
    const {url, center, index, caption} = props;
    return (
        <CSSTransition
            in={true}
            timeout={2500}
            appear={true}
            classNames='fade'>
        <div key='photo' className={'photo-container'}>
            <img src={url} key={index} className={'image'} />
                {center ? <p className='caption'>{caption}</p> : null}
        </div>
        </CSSTransition>    
    )
}

export default SingleImage;