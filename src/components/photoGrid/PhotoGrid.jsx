import React from 'react';
import { PhotoGridWrapper } from './PhotoGridStyles';

const PhotoGrid = (props) => {
    return (
      <PhotoGridWrapper>
            {Object.keys(props.pics).map((key) => <div key={key}>{props.pics[key]}</div>)}
      </PhotoGridWrapper>
    )
}

  export default PhotoGrid;