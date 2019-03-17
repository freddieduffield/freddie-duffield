import styled from 'styled-components';

const MainText = styled.h1`
  font-size: 100px;
  font-family: 'Arial', sans-serif;
  color: white;
  text-align: center;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-shadow: -3px 0 black, 0 3px black, 3px 0 black, 0 -3px black;
`;

export default MainText;
