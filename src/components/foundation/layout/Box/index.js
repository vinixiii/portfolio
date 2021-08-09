import styled from 'styled-components';
import { propToStyle } from '../../../../theme/utils/propToStyle';

export const Box = styled.div`
  ${propToStyle('minHeight')};
  ${propToStyle('flex')};
  ${propToStyle('display')};
  ${propToStyle('justifyContent')};
  ${propToStyle('flexDirection')};
  ${propToStyle('flexWrap')};
  /* background-color: ${({ theme }) => theme.dark.secondary}; */

  /* section {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
  } */
`;
