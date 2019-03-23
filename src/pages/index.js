import React from 'react';
import { Link, Layout } from 'gatsby';

import Physics from '../components/Physics';
import VideoPlayer from '../components/VideoPlayer';
import Form from '../components/Form';

import Container from '../ui/Container';

const IndexPage = () => {
  return (
    <>
      <Container>
        <VideoPlayer />
      </Container>
      {/* <Form /> */}
      <Physics />
    </>
  );
};

export default IndexPage;
