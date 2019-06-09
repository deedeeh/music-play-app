// Third party dependencies
import React from 'react';
import { Image, List } from 'semantic-ui-react';

// relative paths dependencies
import './VideoCard.css';

const VideoCard = (props) => {
  return (
    props.videosList.map(video => 
      <List.Item key={video.contentDetails.videoId}>
        <Image src={video.snippet.thumbnails.high.url} />
        <h2 className='video_header'>{video.snippet.title}</h2>
        <List.Content>
          <h4 className="video_date">Published on {video.snippet.publishedAt}</h4>
          {
            video.snippet.description === ""
          ? <p className='video_content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          : <p className='video_content'>{video.snippet.description}</p>
          }
        </List.Content>
      </List.Item>
    )
  )
}

export default VideoCard;
