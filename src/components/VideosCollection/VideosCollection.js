// Third party dependencies
import React from 'react';
import { List } from 'semantic-ui-react';

// relative paths dependencies
import VideoCard from '../VideoCard/VideoCard';

const VideosCollection = (props) => {
  return (
    <div>
      <List>
          <VideoCard videosList= { props.videosList } />
      </List>
    </div>
  )
}

export default VideosCollection;