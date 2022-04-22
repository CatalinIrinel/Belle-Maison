import styled from 'styled-components/macro';

const mainColor = '#000';
// const goldGradient = 'linear-gradient(45deg,#f9f295,#e0AA3e,#f9f295,#b88a44)';
// const goldColor = '#ffe44d';

export const PortfolioContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background: linear-gradient(
    130deg,
    rgba(255, 255, 255, 0.1),
    rgba(221, 196, 188, 0.8)
  );
  overflow: hidden;
  @media screen and (min-width: 1920.98px) {
    min-height: 80vh;
  }
  @media screen and (max-width: 1024.98px) {
    min-height: 90vh;
    padding-bottom: 10rem;
    justify-content: flex-start;
  }
  @media screen and (max-width: 820.98px) {
    min-height: 80vh;
    align-items: center;
    justify-content: flex-start;
  }

  @media screen and (max-width: 575.98px) {
    min-height: fit-content;
    padding-bottom: 3rem;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const TitleContainer = styled.div`
  font-size: 3rem;
  height: 10%;
  width: 100%;
  text-align: center;
  margin: 20px 0;
  margin-bottom: 3rem;
  margin-top: 4rem;
  @media screen and (max-width: 575.98px) {
    font-size: 1.8rem;
    margin-top: 4rem;
    margin-bottom: 0;
  }
`;

export const Title = styled.h1`
  color: ${mainColor};
`;

export const SubMenu = styled.div`
  width: 100%;
  min-height: 90px;
  margin: 1.5rem 0;
`;

export const MenuItems = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
`;

export const MenuItem = styled.li`
  color: #000;
  padding: 5px 20px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &.active {
    text-decoration: none;
    border-bottom: 3px solid #000;
  }
`;

export const SliderWrapper = styled.div`
  @media screen and (min-width: 2000px) {
    max-width: 3000px;
    width: 100%;
    height: 1200px;
    margin: 3rem 5rem;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1500px;
    width: 100%;
    height: 750px;
    margin: 3rem 5rem;
  }

  @media screen and (max-width: 1024.98px) {
    margin: 2rem 0;
    max-width: 850px;
  }
  @media screen and (max-width: 820.98px) {
    max-width: 680px;
    width: 100%;
    margin: 2rem 3rem;
  }
  @media screen and (max-width: 575.98px) {
    height: auto;
    width: 350px;
    margin: 5rem 0;
    margin-left: 25px;
  }
`;
export const SlideCard = styled.div`
  margin: 0;
  max-width: 1000px;
  width: 100%;
  height: 700px;

  @media screen and (max-width: 1024.98px) {
    max-width: 800px;
    height: 600px;
  }

  @media screen and (max-width: 820.98px) {
    max-width: 680px;
  }
  @media screen and (max-width: 575.98px) {
    height: 300px;
    width: 300px;
  }

  @media screen and (max-width: 390.98px) {
    max-width: 290px;
  }
`;
export const ImageWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 100%;
  margin: 0;
  @media screen and (max-width: 1024.98px) {
    max-width: 800px;
  }

  @media screen and (max-width: 820.98px) {
    max-width: 700px;
  }

  @media screen and (max-width: 575.98px) {
    max-width: 300px;
    width: 100%;
    height: 300px;
  }
  @media screen and (max-width: 391px) {
    max-width: 315px;
    width: 100%;
    height: 300px;
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  margin: 0;
  overflow: hidden;
  @media screen and (max-width: 820.98px) {
    width: 100%;
  }
  @media screen and (max-width: 575.98px) {
    border-radius: 15px;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
