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
                <Title>Ce este Belle Maison?</Title>
              </TitleContainer>
              <Text>
                La Belle Maison, suntem motivați de dorința de a ne servi căt
                mai bine clienții de mai bine de 2 ani, împodobindu-le casele cu
                stilul, rafinamentul, eleganța și căldura care surprind esența
                celor care trăiesc în ele. <br />
                <br />
                Fiind o firmă formată dintr-o echipă cu experiență, înțelegem
                valoarea stabilirii unor relații adevărate de durată cu clienții
                noștri și îmbrățișăm oportunitățile pe care le avem pentru a le
                crea casele de vis.
                <br />
                <br />
                Serviciul pentru clienți este piatra de temelie a companiei
                noastre, iar de la concept până la finalizare, echipa noastră de
                proiectare vă va onora stilul și nevoile funcționale în timp ce
                vă îndrumă prin proces și vă depășește fiecare așteptare.
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
