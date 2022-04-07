import React from 'react';
import './Portfolio.css';
import {
  ImageWrapper,
  MenuItem,
  MenuItems,
  PortfolioContainer,
  SlideCard,
  SlideImage,
  SliderWrapper,
  SubMenu,
  Title,
  TitleContainer,
} from './PortfolioElements';
import Slider from 'react-slick';
import { ImageData } from '../Data';

function Portfolio() {
  var settings = {
    className: 'center',
    dots: true,
    centerPadding: '10px',
    infinite: true,
    arrows: true,
    pauseOnHover: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
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
        <SubMenu>
          <MenuItems>
            <MenuItem className="item active">Baie</MenuItem>
            <MenuItem className="item">Dormitor</MenuItem>
            <MenuItem className="item">Living</MenuItem>
            <MenuItem className="item">Terasa</MenuItem>
          </MenuItems>
        </SubMenu>
        <SliderWrapper>
          <Slider {...settings}>
            {ImageData.images.map((img, index) => {
              return (
                <SlideCard key={index}>
                  <ImageWrapper>
                    <SlideImage src={img.src} alt={img.alt} />
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
