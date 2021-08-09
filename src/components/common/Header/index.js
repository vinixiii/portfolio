import React from 'react';
import { HeaderWrapper } from './styles/HeaderWrapper';
import { Logo } from '../../../theme/Logo';

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderWrapper.Navigation>
        <HeaderWrapper.LeftSide>
          <Logo />
        </HeaderWrapper.LeftSide>
        <HeaderWrapper.RightSide>
          <a href="#">Início</a>
          <a href="#teste">Sobre mim</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </HeaderWrapper.RightSide>
      </HeaderWrapper.Navigation>
    </HeaderWrapper>
  );
}
