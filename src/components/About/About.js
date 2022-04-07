import React, { useEffect } from 'react';
import Aos from 'aos';
import {
  AboutContainer,
  AboutRow,
  AboutWrapper,
  Column1,
  Column2,
  ImageArea,
  Img,
  Text,
  TextContainer,
  Title,
  TitleContainer,
} from './AboutElements';

function About({
  src,
  alt,
  imgStart,
  dataAosTxt,
  dataAosImg,
  dataAosDuration,
  dataAosEasing,
  dataAosDelayTxt,
  dataAosDelayImg,
}) {
  useEffect(() => {
    Aos.init({
      disable: 'phone',
    });
  }, []);
  return (
    <AboutContainer id="about">
      <AboutWrapper>
        <AboutRow imgStart={imgStart}>
          <Column1>
            <TextContainer
              data-aos={dataAosTxt}
              data-aos-duration={dataAosDuration}
              data-aos-easing={dataAosEasing}
              data-aos-delay={dataAosDelayTxt}
            >
              <TitleContainer>
                <Title>Ce este Belle Maison Studio?</Title>
              </TitleContainer>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                eget viverra sem. Nam non velit id elit scelerisque tincidunt.
                Morbi ut tincidunt lectus, at fringilla orci. Aliquam non mauris
                vitae tellus pellentesque fermentum. Morbi aliquam est sit amet
                ligula viverra bibendum. Quisque vitae odio odio. Etiam mattis
                feugiat dui eget semper. Nulla varius ullamcorper dui non
                faucibus. Maecenas eget libero lacus.
              </Text>
            </TextContainer>
          </Column1>
          <Column2>
            <ImageArea>
              <Img
                src={src}
                alt={alt}
                data-aos={dataAosImg}
                data-aos-duration={dataAosDuration}
                data-aos-easing={dataAosEasing}
                data-aos-delay={dataAosDelayImg}
              />
            </ImageArea>
          </Column2>
        </AboutRow>
      </AboutWrapper>
    </AboutContainer>
  );
}

export default About;
