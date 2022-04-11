import React from 'react';
import Bg from '../../images/13.jpg';
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  ImgBg,
} from './HeroElements';

function Hero() {
  return (
    <HeroContainer id="hero">
      <HeroBg>
        <ImgBg src={Bg} alt="Belle Maison Studio" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Belle Maison Studio</HeroH1>
        <HeroP>
          Comfortul tau este important pentru viata de zi cu zi. Noi putem da
          viata ideilor voastre !
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
