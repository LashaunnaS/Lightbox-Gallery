import React from 'react';
import { PhotoGridWrapper, Photo } from './PhotoGridStyles';

const PhotoGrid = ({ imgs }) => {


  const scaleUp = (e) => {
    let x = e.target;
    x.style.transform = "scale(1.2)";
    x.style.transition = "1s";
  }

  const scaleDown = (e) => {
    let x = e.target;
    x.style.transform = "scale(1)";
    x.style.transition = "1s";
  }

  return (
    <PhotoGridWrapper>
      {
        imgs.map((i, index) => {
          return (
            <div key={index}>
              <Photo src={i} className={`img${index}`} onMouseOver={scaleUp} onMouseOut={scaleDown} />
            </div>
          )
        })
      }

    </PhotoGridWrapper>
  )

}
export default PhotoGrid;