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

  onPlaying(e) {
    // const percent =
    //   (this.videoRef.current.currentTime / this.videoRef.current.duration) *
    //   100;

    console.log(e.target.currentTime);
    // progressBar.style.flexBasis = `${percent}%`;
  }

  render() {
    const { on } = this.state;

    return (
      <Player>
        <video
          src="https://res.cloudinary.com/freddieduffield/video/upload/v1551129480/IMG_1720.mov"
          width="200px"
          ref={this.videoRef}
          onEnded={() => this.onEnd()}
          onTimeChange={this.onPlaying}
        />
        <Controls on={on} togglePlay={this.togglePlay} />
        <Player.ProgressBar onChange={this.handleProgress}>
          <Player.Progress />
        </Player.ProgressBar>
      </Player>
    );
  }
}

export default VideoPlayer;
