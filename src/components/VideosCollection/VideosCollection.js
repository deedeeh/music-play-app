// Third party dependencies
import React from 'react';
import { List, Grid } from 'semantic-ui-react';

// relative paths dependencies
import VideoCard from '../VideoCard/VideoCard';
import './VideosCollection.css'

const VideosCollection = (props) => {
  return (
    <Grid>
      <VideoCard videosList= { props.videosList } />
    </Grid>
  )
}

export default VideosCollection;