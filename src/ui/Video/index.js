import styled from 'styled-components';

import Button from './Button';
import Controls from './Controls';
import Pause from './Pause';
import Play from './Play';
import Progress from './Progress';
import ProgressBar from './ProgressBar';

const VideoPlayer = styled.div`
  position: relative;
`;

VideoPlayer.Button = Button;
VideoPlayer.Controls = Controls;
VideoPlayer.Pause = Pause;
VideoPlayer.Play = Play;
VideoPlayer.Progress = Progress;
VideoPlayer.ProgressBar = ProgressBar;

export default VideoPlayer;
