import styled from 'styled-components';

const Glitch = styled.div`
  color: #cdcdcd;
  font-size: 100px;
  font-family: arial;
  position: relative;
  width: 800px;
  margin: 0 auto;
  background: transparent;

  ::before,
  ::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ::before {
    left: 2px;
    text-shadow: -1px 0 red;
    background: transparent;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim-1 2s infinite linear alternate-reverse;
  }

  ::after {
    left: -2px;
    text-shadow: -1px 0 blue;
    background: transparent;
    animation: glitch-anim-2 2s infinite linear alternate-reverse;
  }

  @keyframes glitch-anim-1 {
    0% {
      clip: rect(70px, 450px, 76px, 0);
    }
    20% {
      clip: rect(29px, 450px, 16px, 0);
    }
    40% {
      clip: rect(76px, 450px, 3px, 0);
    }
    60% {
      clip: rect(42px, 450px, 78px, 0);
    }
    80% {
      clip: rect(15px, 450px, 13px, 0);
    }
    100% {
      clip: rect(53px, 450px, 5px, 0);
    }
  }

  @keyframes glitch-anim-2 {
    0% {
      clip: rect(70px, 450px, 76px, 0);
    }
    20% {
      clip: rect(29px, 450px, 16px, 0);
    }
    40% {
      clip: rect(76px, 450px, 3px, 0);
    }
    60% {
      clip: rect(42px, 450px, 78px, 0);
    }
    80% {
      clip: rect(15px, 450px, 13px, 0);
    }
    100% {
      clip: rect(53px, 450px, 5px, 0);
    }
  }
`;

export default Glitch;
