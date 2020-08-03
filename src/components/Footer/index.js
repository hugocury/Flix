import React from 'react';
import { FooterBase, Logo } from './styles';
import logo from '../../assets/img/logo07.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://flix-wheat.vercel.app/">
        <Logo src={logo} alt="Logo Unplugged Flix" />
      </a>
      <p>
        Orgulhosamente desenvolvido por
        {' '}
        <a href="https://github.com/hugocury">
          Hugo Cury
        </a>
        {' '}
        durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
