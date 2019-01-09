import React, { Fragment } from 'react';
import { PhotoGridWrapper, Photo } from './PhotoGridStyles';
import LightboxSlider from './LightboxSlider';

class PhotoGrid extends React.Component {

  scaleUp = (e) => {
    let x = e.target;
    x.style.transform = "scale(1.2)";
    x.style.transition = "1s";
  }

  scaleDown = (e) => {
    let x = e.target;
    x.style.transform = "scale(1)";
    x.style.transition = "1s";
  }

  render() {
    const { imgs } = this.props;

    return (
      <Fragment>
        <PhotoGridWrapper>
          {
            imgs.map((img, index) => {
              return (
                <div key={index}>
                  <Photo src={img} className={`img${index}`} onMouseOver={this.scaleUp} onMouseOut={this.scaleDown} />
                  <LightboxSlider imgs={this.props.imgs} index={index} />
                </div>
              )
            })
          }
        </PhotoGridWrapper>
      </Fragment>
    )
  }
}

export default PhotoGrid;

