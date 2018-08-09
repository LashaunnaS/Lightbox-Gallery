import React from 'react';
import { PhotoGridWrapper, ImageWrapper } from './PhotoGridStyles';

const PhotoGrid = ({imgs}) => {
    return (
      <PhotoGridWrapper>
      {
        imgs.map(i => {
          return(
            Object.keys(i).map(key => {
            return(
                <ImageWrapper key={key}>
                  <img src={imgs[key]} alt='' />
                </ImageWrapper>
            )
          }))
      } )}
      </PhotoGridWrapper>
    )
}

  export default PhotoGrid;
  