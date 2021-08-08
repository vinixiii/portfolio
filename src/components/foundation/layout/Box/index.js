import styled from 'styled-components';

export const Box = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: ${({ theme }) => theme.dark.secondary};

  /* section {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
  } */
`;
