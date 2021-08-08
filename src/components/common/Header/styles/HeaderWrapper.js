import styled, { css } from 'styled-components';
import { breakpointsMediaQuerie } from '../../../../theme/utils/breakpointsMediaQuerie';

export const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 38px;
  background-color: ${({ theme }) => theme.dark.quaternary};
  color: ${({ theme }) => theme.dark.secondaryText};
  font-weight: 500;
  transition: 0.6s;

  ${breakpointsMediaQuerie({
    md: css`
      padding: 18px 28px;
    `,
  })};
`;

HeaderWrapper.Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  ${breakpointsMediaQuerie({
    xs: css`
      width: 100%;
      font-size: 14px;
    `,
    md: css`
      width: 100%;
      max-width: 768px;
      margin-left: auto;
      margin-right: auto;
      font-size: 16px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;

HeaderWrapper.LeftSide = styled.div`
  order: 1;
  display: none;

  ${breakpointsMediaQuerie({
    md: css`
      display: block;
    `,
  })}
`;

HeaderWrapper.RightSide = styled.nav`
  order: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${breakpointsMediaQuerie({
    md: css`
      max-width: 480px;
    `,
  })}

  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.dark.primaryText};
    transition: 200ms ease-in-out;

    &:hover,
    &:focus {
      font-weight: 500;
      color: ${({ theme }) => theme.dark.primary};
    }
  }
`;
