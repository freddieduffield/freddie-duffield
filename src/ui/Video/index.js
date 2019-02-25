import styled from 'styled-components';

import Play from './Play';
import Button from './Button';
import Pause from './Pause';
import Controls from './Controls';

const VideoPlayer = styled.div`
  position: relative;
`;

VideoPlayer.Button = Button;
VideoPlayer.Play = Play;
VideoPlayer.Pause = Pause;
VideoPlayer.Controls = Controls;

export default VideoPlayer;
