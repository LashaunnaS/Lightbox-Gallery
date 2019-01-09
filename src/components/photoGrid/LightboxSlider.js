import React, { Fragment } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app


class LightboxSlider extends React.Component {
    state = {
        photoIndex: 0,
        isOpen: false
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        const { imgs, index } = this.props;

        return (
            <Fragment>
                <button type="button" onClick={() => this.setState({ isOpen: !isOpen, photoIndex: index })}>
                    click
                </button>

                {isOpen && (
                    <Lightbox
                        mainSrc={imgs[photoIndex]}
                        nextSrc={imgs[(photoIndex + 1) % imgs.length]}
                        prevSrc={imgs[(photoIndex + imgs.length - 1) % imgs.length]}
                        onCloseRequest={() => this.setState({ isOpen: !isOpen })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + imgs.length - 1) % imgs.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % imgs.length,
                            })
                        }
                    />
                )}
            </Fragment>
        )
    }
}

export default LightboxSlider