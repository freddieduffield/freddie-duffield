import React from 'react';
import Controls from '../components/Controls';
import Player from '../ui/Video';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.togglePlay = this.togglePlay.bind(this);
    this.videoRef = React.createRef();
    this.state = {
      on: false
    };
  }

  componentDidMount() {
    this.setState({ on: true });
  }

  togglePlay() {
    this.setState(({ on }) => ({ on: !on }));
    const method = this.state.on ? 'play' : 'pause';
    this.videoRef.current[method]();
  }

  onEnd() {
    this.setState({ on: true });
  }

  handleProgress() {
    // const percent = (video.currentTime / video.duration) * 100;
    // progressBar.style.flexBasis = `${percent}%`;
  }

  render() {
    const { on } = this.state;
    console.log(this.state);

    return (
      <Player>
        <video
          src="https://res.cloudinary.com/freddieduffield/video/upload/v1551129480/IMG_1720.mov"
          width="200px"
          ref={this.videoRef}
          onEnded={() => this.onEnd()}
        />
        <Controls on={on} togglePlay={this.togglePlay} />
        <Player.ProgressBar>
          <Player.Progress />
        </Player.ProgressBar>
      </Player>
    );
  }
}

export default VideoPlayer;
