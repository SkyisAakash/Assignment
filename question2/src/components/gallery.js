import React from 'react';
import SingleImage from './singleImage';
import './carousel.css';

class PhotoGallery extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
        this.moveLeft = this.moveLeft.bind(this)
        this.moveRight = this.moveRight.bind(this)
    }

    moveLeft() {
        let newState = this.previousIndex(this.state.index)
        this.setState({
            index: newState
        })
    }

    moveRight() {
        let newState = this.nextIndex(this.state.index)
        this.setState({
            index: newState
        })
    }

    previousIndex(index) {
        let nextIndex = (index - 1 < 0) ? this.props.images.length - 1 : index - 1
        return nextIndex
    }

    nextIndex(index) {
        let nextIndex = (index + 1 === this.props.images.length) ? 0 : index + 1
        return nextIndex
    }

    render() {
        let { index } = this.state;
        const { images } = this.props;
        let prevImageIdx = this.previousIndex(index)
        let nextImageIdx = this.nextIndex(index)
        if(images===undefined)return null;
        if(images.length===0)return <h1>No images today :(</h1>
        return(
            <div className='carousel' tabIndex='0'>
                <ul className='carousel-wrap'>
                    { images[prevImageIdx] ? (
                        <li className='left-li' onClick={this.moveLeft}>
                            <SingleImage index={index}
                            url={images[prevImageIdx].url}
                            location="left"
                            caption={images[prevImageIdx].caption}
                            />
                        </li>
                    ) : (<li className='empty'></li>)}
                    <li className='center-li'>
                        <SingleImage index={index}
                            url={images[index].url}
                            location="center"
                            caption={images[index].caption}
                        />
                    </li>
                    {images[nextImageIdx] ? (
                        <li className='right-li' onClick={this.moveRight}>
                            <SingleImage index={index}
                                url={images[nextImageIdx].url}
                                location="right"
                                caption={images[nextImageIdx].caption}
                            />
                        </li>
                    ) : (<li className='empty'></li>)}
                </ul>
            </div>
        )
    }
}

export default PhotoGallery;

