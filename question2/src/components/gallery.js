import React from 'react';


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
        return(
            <div className='carousel' tabIndex='0'>
                <ul className='carousel-wrap'>
                    { images[idx-1] ? (
                        <li className='right-li' onClick={this.moveLeft}>
                            {/* image-1 */}
                        </li>
                    ) : (<li className='empty'></li>)}
                    <li className='center-li'>
                        {/* image0 */}
                    </li>
                    {images[idx + 1] ? (
                        <li className='left-li' onClick={this.moveRight}>
                            {/* image1 */}
                        </li>
                    ) : (<li className='empty'></li>)}
                </ul>
            </div>
        )
    }
}

export default PhotoGallery;

