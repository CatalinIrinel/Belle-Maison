import styled from 'styled-components/macro';

const mainColor = '#000';
// const goldGradient = 'linear-gradient(45deg,#f9f295,#e0AA3e,#f9f295,#b88a44)';
const goldColor = '#ffe44d';

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

  @media screen and (max-width: 768px) {
    height: 80vh;
    align-items: center;
    justify-content: flex-start;
  }

  @media screen and (max-width: 575.98px) {
    height: auto;
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
  margin-top: 5%;
  @media screen and (max-width: 575.98px) {
    font-size: 1.8rem;
    margin: 40px 0;
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
  max-width: 1300px;
  width: 100%;
  height: auto;
  margin: auto;
  margin-bottom: 5%;

  @media screen and (max-width: 575.98px) {
    height: auto;
    margin-bottom: 50px;
  }
`;
export const SlideCard = styled.div`
  height: 700px;
  @media screen and (max-width: 575.98px) {
    height: auto;
  }
`;
export const ImageWrapper = styled.div`
  width: 400px;
  height: 100%;
  @media screen and (max-width: 575.98px) {
    width: 300px;
  }
`;

export const SlideImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 600px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);

  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 575.98px) {
    border-radius: 15px;
    height: 500px;
  }
`;

export const Arrows = styled.div`
  max-width: 1500px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
