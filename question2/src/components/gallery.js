import React from 'react';


class PhotoGallery extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
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

    render() {
        return(
            <div className='carousel' tabIndex='0'>
                <ul className='carousel-wrap'>
                    {/* images */}
                </ul>
            </div>
        )
    }
}

export default PhotoGallery;

