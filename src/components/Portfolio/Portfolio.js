import React from 'react';
import './Portfolio.css';
import {
  ImageWrapper,
  // MenuItem,
  // MenuItems,
  PortfolioContainer,
  SlideCard,
  SlideImage,
  SliderWrapper,
  // SubMenu,
  Title,
  TitleContainer,
} from './PortfolioElements';
import Slider from 'react-slick';
import { ImageData } from '../Data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Portfolio() {
  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 5000,
    className: 'center',
    centerMode: true,
    centerPadding: '120px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 820.98,
        settings: {
          className: 'center',
          centerMode: true,
          centerPadding: '8px',
          arrows: false,
        },
      },
      {
        breakpoint: 575.98,
        settings: {
          className: 'center',
          centerMode: true,
          centerPadding: '8px',
          arrows: false,
          swipteToSlide: true,
          dots: true,
          autoplay: false,
          speed: 1000,
        },
      },
    ],
  };
  return (
    <>
      <PortfolioContainer id="portfolio">
        <TitleContainer>
          <Title>Portofoliul Nostru</Title>
        </TitleContainer>
        {/* <SubMenu>
          <MenuItems>
            <MenuItem className="item active">Baie</MenuItem>
            <MenuItem className="item">Dormitor</MenuItem>
            <MenuItem className="item">Living</MenuItem>
            <MenuItem className="item">Terasa</MenuItem>
          </MenuItems>
        </SubMenu> */}
        <SliderWrapper>
          <Slider {...settings}>
            {ImageData.images.map((img, index) => {
              return (
                <SlideCard key={index}>
                  <ImageWrapper>
                    <SlideImage loading="lazy" src={img.src} alt={img.alt} />
                  </ImageWrapper>
                </SlideCard>
              );
            })}
          </Slider>
        </SliderWrapper>
      </PortfolioContainer>
    </>
  );
}

export default Portfolio;
