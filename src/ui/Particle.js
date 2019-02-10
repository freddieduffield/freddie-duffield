import styled, { css } from 'styled-components';
import { randomNumber } from './helpers';

const size = () => randomNumber(5) + 5;
const axis = max => randomNumber(max) * 1;
const opacity = () => randomNumber(100) / 100;

function createAnimatedParticles() {
  let styles = '';

  for (let i = 0; i < 60; i += 1) {
    styles += `
      @keyframes particle-animation-${i} {
    100% {
      transform: translate3d(${axis(120)}vw, ${axis(110)}vh, ${axis(100)}px);
    }
  }
        :nth-child(${i}) {
            animation: particle-animation-${i} 60s infinite;
            opacity: ${opacity};
            animation-delay: 0.2s;
            height: 20px;
            width: 20px;
            background: hsl(${randomNumber(360)}, 70%, 50%);
            transform: translate3d(
                ${axis(90)}vw, 
                ${axis(90)}vh, 
                ${axis(100)}px);
        }
    `;
  }
  return css`
    ${styles}
  `;
}

const Particle = styled.div`
  position: absolute;
  border-radius: 50%;

  ${createAnimatedParticles()}
`;

export default Particle;
