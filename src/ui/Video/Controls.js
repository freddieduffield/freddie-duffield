import styled, { css } from 'styled-components';

const Controls = styled.div`
  position: absolute;
  bottom: 5px;

  ${({ on }) =>
    on &&
    css`
      top: 50%;
      left: 50%;
      bottom: unset;
      transform: translate(-50%, -50%);
    `};
`;

export default Controls;
