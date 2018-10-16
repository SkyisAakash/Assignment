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
        this.setState({
            index: this.state.index - 1
        })
    }

    moveRight() {
        this.setState({
            index: this.state.index + 1
        })
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        if (newProps.images.length - 1 < this.state.index) {
            this.setState({
                index: 0
            })
        }
    }

    render() {
        let { index } = this.state;
        const { images } = this.props;
        if(images===undefined)return null;
        return(
            <div className='carousel' tabIndex='0'>
                <ul className='carousel-wrap'>
                    { images[index-1] ? (
                        <li className='right-li' onClick={this.moveLeft}>
                            <SingleImage index={index}
                            url={images[index-1].url}
                            center={false}
                            caption={images[index-1].caption}
                            />
                        </li>
                    ) : (<li className='empty'></li>)}
                    <li className='center-li'>
                        <SingleImage index={index}
                            url={images[index].url}
                            center={false}
                            caption={images[index].caption}
                        />
                    </li>
                    {images[index + 1] ? (
                        <li className='left-li' onClick={this.moveRight}>
                            <SingleImage index={index}
                                url={images[index + 1].url}
                                center={false}
                                caption={images[index + 1].caption}
                            />
                        </li>
                    ) : (<li className='empty'></li>)}
                </ul>
            </div>
        )
    }
}

export default PhotoGallery;

