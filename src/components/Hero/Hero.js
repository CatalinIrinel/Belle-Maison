import React from 'react';
import Video from '../../videos/heroBg.mp4';
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from './HeroElements';

function Hero() {
  return (
    <HeroContainer id="hero">
      <HeroBg>
        <VideoBg
          autoPlay={true}
          loop={true}
          controls={false}
          playsInline
          muted
          src={Video}
          type="video/mp4"
        />
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
