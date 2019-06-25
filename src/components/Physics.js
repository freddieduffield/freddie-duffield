import React from 'react';
import Particle from '../ui/Particle';
import ParticleContainer from '../ui/ParticleContainer';
import MainText from '../ui/MainText';
import ReactI from '../ui/React';
import TwitterLink from '../components/TwitterLink';
import GitHubLink from '../components/GitHubLink';

const generateParticles = numberOfParticles => {
  const particles = [];
  for (let index = 0; index < numberOfParticles; index++) {
    particles.push(<Particle key={`particle${index}`} />);
  }
  return particles;
};

const Physics = () => {
  return (
    <ParticleContainer>
      <MainText>freddieduffield.com</MainText>
      <Particle>
        <TwitterLink />
      </Particle>
      <Particle>
        <GitHubLink />
      </Particle>
      <Particle>
        <ReactI />
      </Particle>
      {generateParticles(100)}
    </ParticleContainer>
  );
};

export default Physics;
