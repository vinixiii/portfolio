import styled, { css } from 'styled-components';

export const TextStyleVariantsMap = {
  title: css`
    font-size: ${({ theme }) => theme.typographyVariants.title.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.title.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.title.lineHeight};
    margin: 0;
  `,
  paragraph: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.paragraph.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.paragraph.lineHeight};
  `,
  smallTitle: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallTitle.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.smallTitle.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.smallTitle.lineHeight};
    margin: 0;
  `,
  smallParagraph: css`
    font-size: ${({ theme }) =>
      theme.typographyVariants.smallParagraph.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.smallParagraph.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.smallParagraph.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.smallestException.lineHeight};
  `,
  smallestExceptionBold: css`
    font-size: ${({ theme }) =>
      theme.typographyVariants.smallestExceptionBold.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.smallestExceptionBold.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.smallestExceptionBold.lineHeight};
  `,
};

const TextBase = styled.span`
  ${({ variation }) => TextStyleVariantsMap[variation]}
`;

export function Text({ tag, variation, children, ...props }) {
  return (
    <TextBase as={tag} variation={variation} {...props}>
      {children}
    </TextBase>
  );
}
