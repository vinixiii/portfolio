import styled, { css } from 'styled-components';
import { breakpointsMediaQuerie } from '../../../../theme/utils/breakpointsMediaQuerie';
import { propToStyle } from '../../../../theme/utils/propToStyle';

const Container = styled.div`
  width: 100%;
  padding: 0 28px;
  margin: auto;
  /* margin-right: auto;
  margin-left: auto; */
  color: ${({ theme }) => theme.dark.primaryText};

  ${breakpointsMediaQuerie({
    sm: css`
      max-width: 576px;
    `,
    md: css`
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
`;

const Col = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}

  hr {
    max-width: 400px;
    min-width: 100px;
    border: 3px solid ${({ theme }) => theme.dark.primary};
    border-radius: 10px;
    margin: 42px 0;
  }

  ${({ value }) => {
    if (typeof value === 'number') {
      return css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value) / 12}%;
        max-width: ${(100 * value) / 12}%;
      `;
    }

    return breakpointsMediaQuerie({
      xs: value?.xs
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.xs) / 12}%;
            max-width: ${(100 * value.xs) / 12}%;
          `
        : '',
      sm: value?.sm
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.sm) / 12}%;
            max-width: ${(100 * value.sm) / 12}%;
          `
        : '',
      md: value?.md
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.md) / 12}%;
            max-width: ${(100 * value.md) / 12}%;
          `
        : '',
      lg: value?.lg
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.lg) / 12}%;
            max-width: ${(100 * value.lg) / 12}%;
          `
        : '',
      xl: value?.xl
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.xl) / 12}%;
            max-width: ${(100 * value.xl) / 12}%;
          `
        : '',
    });
  }}
`;

export const Grid = {
  Container,
  Row,
  Col,
};
