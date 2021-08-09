import React from 'react';
import { Text } from '../../foundation/Text';
import { FooterWrapper } from './styles/FooterWrapper';

export function Footer() {
  return (
    <FooterWrapper>
      <FooterWrapper.Navigation>
        <FooterWrapper.LeftSide>
          <Text>
            Desenvolvido com &#128149; por <span>Vinícius Figueiroa</span>.
          </Text>
        </FooterWrapper.LeftSide>
        <FooterWrapper.RightSide>
          <a href="https://github.com/vinixiii" target="_blank">
            <img src="./images/github.svg" />
          </a>
          <a
            href="https://linkedin.com/in/vinicius-ss-figueiroa"
            target="_blank"
          >
            <img src="./images/linkedin.svg" />
          </a>
        </FooterWrapper.RightSide>
      </FooterWrapper.Navigation>
    </FooterWrapper>
  );
}
