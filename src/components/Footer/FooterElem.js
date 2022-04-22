import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

// const mainColor = '#000';
// const navBg = '#1f1f1f';
const goldGradient = 'linear-gradient(45deg,#f9f295,#e0AA3e,#f9f295,#b88a44)';
const goldColor = '#ffe44d';

export const FooterContainer = styled.footer`
  background: #1f1f1f;
  width: 100%;
  height: 80px;
  position: relative;
  z-index: 10;
  display: none;

  @media screen and (max-width: 769px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    margin-top: 0;
  }
`;
export const FooterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1600px;
  width: 100%;
`;

export const SocialMedia = styled.section`
  max-width: 1600px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1600px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled.div`
  display: flex;
  align-items: center;
  width: 533px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FooterLogoContainer = styled(Link)`
  height: 60px;
`;

export const FooterLogo = styled.img`
  height: 100%;
  cursor: pointer;
`;

export const WebsiteRights = styled.small`
  background: ${goldGradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: ${goldColor};
  text-align: center;
  font-size: 1.3rem;
  letter-spacing: 0.3rem;
  width: 533px;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 10px;
    width: 100%;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 533px;
  @media screen and (max-width: 768px) {
    margin: 10px;
    width: 100%;
    justify-content: space-evenly;
  }
`;

export const SocialIconsLink = styled.a`
  color: ${goldColor};
  font-size: 24px;
  margin-left: 40px;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
