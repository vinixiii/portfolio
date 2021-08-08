import { breakpoints } from '../Breakpoints';
import { css } from 'styled-components';

export function breakpointsMediaQuerie(cssBreakpoints) {
  const breakpointsName = Object.keys(cssBreakpoints);

  return breakpointsName.map((breakpointName) => {
    return css`
      @media screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssBreakpoints[breakpointName]}
      }
    `;
  });
}
