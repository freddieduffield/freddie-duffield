import React from 'react';
import Player from '../ui/Video';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.togglePlay = this.togglePlay.bind(this);
    this.videoRef = React.createRef();
    this.state = {
      method: 'pause'
    };
  }

  togglePlay() {
    const video = this.videoRef.current;
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    this.setState({ method: method });
    // console.log(method);
  }

  render() {
    return (
      <Player>
        <video
          src="https://res.cloudinary.com/freddieduffield/video/upload/v1551129480/IMG_1720.mov"
          width="200px"
          ref={this.videoRef}
        />
        <Player.Controls>
          <Player.Button onClick={this.togglePlay} title="Toggle Play">
            {!this.state.method === 'pause' ? (
              <Player.Pause />
            ) : (
              <Player.Play />
            )}
          </Player.Button>
        </Player.Controls>
      </Player>
    );
  }
}

export default VideoPlayer;
