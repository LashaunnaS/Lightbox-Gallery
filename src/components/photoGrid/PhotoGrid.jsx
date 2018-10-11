import React from 'react';
import { PhotoGridWrapper, Photo } from './PhotoGridStyles';

const PhotoGrid = ({ imgs }) => {
  return (
    <PhotoGridWrapper>
      {
        imgs.map((i, index) => {
          return <Photo key={index} src={i} />
        })
      }
    </PhotoGridWrapper>
  )

}
export default PhotoGrid;