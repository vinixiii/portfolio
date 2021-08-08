import styled from 'styled-components';

export const Box = styled.div`
  height: 100vh;
  scroll-snap-type: y proximity;
  overflow-y: scroll;

  section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
  }
`;
