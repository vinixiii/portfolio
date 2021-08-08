import styled from 'styled-components';
import { propToStyle } from '../../../../theme/utils/propToStyle';

export const Box = styled.div`
  height: 100vh;
  ${propToStyle('flex')};
  ${propToStyle('display')};
  ${propToStyle('flexDirection')};
  background-color: ${({ theme }) => theme.dark.secondary};
  scroll-snap-align: start;

  /* section {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
  } */
`;
