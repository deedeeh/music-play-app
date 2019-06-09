// Third party dependencies
import React from 'react';
import 
{ 
  Image, 
  List, 
  Header 
} from 'semantic-ui-react';

// relative paths dependencies
import './VideoCard.css'

const VideoCard = (props) => {
  return (
    props.videosList.map(video => 
      <List.Item key={video.contentDetails.videoId}>
        <Image src={video.snippet.thumbnails.high.url} />
        <List.Content>
          <Header as='h2'>{video.snippet.title}</Header>
        </List.Content>
      </List.Item>
    )
  )
}

export default VideoCard;
