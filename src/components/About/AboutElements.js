import styled from 'styled-components/macro';

const mainColor = '#000';
const goldGradient = 'linear-gradient(45deg,#f9f295,#e0AA3e,#f9f295,#b88a44)';
// const goldColor = '#ffe44d';
// const orange = '#dc5526';

export const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${mainColor};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: 10% 0;
    height: auto;
  }
  @media screen and (max-width: 575.98px) {
    padding: 0;
    min-height: 100vh;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px 24px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    min-height: 100%;
  }
`;

export const AboutRow = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1''col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  @media screen and (max-width: 575.98px) {
    margin-bottom: 3rem;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TitleContainer = styled.div`
  width: 100%;
  max-width: 590px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 4rem;
  background: ${goldGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 575.98px) {
    font-size: 3rem;
    padding-top: 25px;
    text-align: center;
  }
`;
export const TextContainer = styled.div`
  max-width: 540px;
  padding-top: 0;
`;

export const Text = styled.p`
  font-size: 2.5rem;
  line-height: 1.5;
  text-align: left;
  color: #fff;

  @media screen and (max-width: 575.98px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;
export const ImageArea = styled.div`
  max-width: 555px;
  height: 100%;
  margin-left: 10px;
  animation: float 3s infinite ease-in-out;
  @keyframes float {
    0% {
      transform: translateY(0);
      opacity: 0.2;
    }
    50% {
      transform: translateY(-20px);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 0.2;
    }
  }
  @media screen and (max-width: 575.98px) {
    display: flex;
    justify-content: center;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  @media screen and (max-width: 575.98px) {
    width: 200px;
  }
`;
