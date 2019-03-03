import React from 'react';
import PropTypes from 'prop-types';
import Player from '../ui/Video';

const Controls = props => {
  const { on, togglePlay } = props;
  return (
    <Player.Controls on={on}>
      <Player.Button onClick={togglePlay}>
        {!on ? <Player.Pause /> : <Player.Play />}
      </Player.Button>
    </Player.Controls>
  );
};

Controls.propTypes = {
  on: PropTypes.bool.isRequired,
  togglePlay: PropTypes.func.isRequired
};

export default Controls;
