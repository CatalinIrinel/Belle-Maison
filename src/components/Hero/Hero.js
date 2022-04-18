import React from 'react';
import Bg from '../../images/13.jpg';
import logo from '../../images/LogoBelle.png';
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroP,
  ImgBg,
  LogoImg,
  LogoWrapper,
} from './HeroElements';

function Hero() {
  return (
    <HeroContainer id="hero">
      <HeroBg>
        <ImgBg src={Bg} alt="Belle Maison Studio" />
      </HeroBg>
      <HeroContent>
        <LogoWrapper>
          <LogoImg className="logoHero" src={logo} alt="Belle maison studio" />
        </LogoWrapper>
        <HeroP>
          <i>
            Comfortul tau este important pentru viata de zi cu zi. Noi putem da
            viata ideilor voastre !
          </i>
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
