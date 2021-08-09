import React from 'react';
import { Text } from '../../foundation/Text';
import { CardWrapper } from './styles/CardWrapper';

export default function Card({
  image,
  title,
  repositoryLink,
  siteLink,
  children,
}) {
  return (
    <CardWrapper>
      <img src={image} />
      <Text tag="p" variation="smallTitle" marginTop="16px" marginBottom="16px">
        {title}
      </Text>
      <Text tag="p" variation="smallParagraph" style={{ color: '#e5e5e5' }}>
        {children}
      </Text>
      <div>
        <a href={repositoryLink} target="_blank">
          Repositório &#128279;
        </a>
        <a href={siteLink} target="_blank">
          Acessar site &#128279;
        </a>
      </div>
    </CardWrapper>
  );
}
