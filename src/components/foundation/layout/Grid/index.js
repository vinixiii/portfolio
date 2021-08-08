import styled, { css } from 'styled-components';
import { breakpointsMediaQuerie } from '../../../../theme/utils/breakpointsMediaQuerie';
import { propToStyle } from '../../../../theme/utils/propToStyle';

const Container = styled.div`
  width: 100%;
  padding: 0 28px;
  margin-right: auto;
  margin-left: auto;
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
    width: 400px;
    border: 3px solid ${({ theme }) => theme.dark.primary};
    border-radius: 10px;
    margin: 42px 0;
  }
`;

export const Grid = {
  Container,
  Row,
  Col,
};
