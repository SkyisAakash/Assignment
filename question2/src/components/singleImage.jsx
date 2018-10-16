import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './singleImage.css';
const SingleImage = (props) => {
    const {url, index, caption, location} = props;
    const less="<<";
    const great=">>"

    return (
        <CSSTransition
            in={true}
            timeout={2000}
            appear={true}
            enter={true}
            classNames='fade'>
            <div key='photo' className={'photo-container'}>
                {location==="left" ? <p className='leftArrow'>{less}</p> : null}
                {location==="right" ? <p className='rightArrow'>{great}</p> : null}
                <img src={url} key={index} className={'image'} alt="Could not load Image :("/>
                {location==="center" ? <p className='caption'>{caption}</p> : null}
            </div>
        </CSSTransition>    
    )
}

export default SingleImage;