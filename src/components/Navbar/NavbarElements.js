import styled from 'styled-components/macro';
import { Link as LinkS } from 'react-scroll';

const mainColor = '#000';
const navBg = '#1f1f1f';
const goldGradient = 'linear-gradient(45deg,#f9f295,#e0AA3e,#f9f295,#b88a44)';
const goldColor = '#ffe44d';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${({ toggle }) => (toggle ? '170px' : '60px')};
  box-sizing: initial;
  background: #1f1f1f;
  transition: width 0.5s;
  overflow: hidden;
  z-index: 10;
  display: ${({ toggle }) => (toggle ? 'flex' : '')};
  flex-direction: ${({ toggle }) => (toggle ? 'column' : '')};
  justify-content: ${({ toggle }) => (toggle ? 'space-between' : '')};
`;

export const NavItems = styled.ul`
  top: 0;
  left: 0;
  width: 100%;
  padding-left: 5px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.footer > * {
    margin-bottom: 20px;
  }
`;

export const NavItem = styled.li`
  position: relative;
  list-style: none;
  width: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  &.active {
    background: ${goldGradient};
  }
`;

export const Copyrights = styled.li`
  display: ${({ toggle }) => (toggle ? 'flex' : 'none')};
  background: ${goldGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 15px;

  .copyrights {
    color: ${goldColor};
  }
  p {
    width: 170px;
    overflow: hidden;
  }

  p:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p:nth-child(1) > * {
    margin-right: 5px;
  }

  img {
    width: 50px;
  }
`;

export const Socialmedia = styled.li`
  width: 100%;
  height: 40px;
  font-size: 30px;
  background: ${goldGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: ${({ toggle }) => (toggle ? 'flex' : 'none')};
  align-items: ${({ toggle }) => (toggle ? 'center' : '')};
  justify-content: ${({ toggle }) => (toggle ? 'space-evenly' : '')};

  .icon {
    cursor: pointer;
    color: ${goldColor};
  }
`;

export const NavLogo = styled(LinkS)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767.98px) {
    justify-content: center;
  }
  @media screen and (max-width: 575.98px) {
    justify-content: center;
  }
`;
export const NavLink = styled(LinkS)`
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: ${goldColor};
  cursor: pointer;
`;

export const NavIcon = styled.span`
  position: relative;
  display: flex;
  min-width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;

  &.active {
    color: ${mainColor};
  }
`;

export const NavText = styled.span`
  position: relative;
  display: block;
  font-size: 15px;
  padding-left: 10px;
  height: 60px;
  line-height: 60px;
  white-space: normal;
  background: ${goldGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &.active {
    background: none;
    -webkit-background-clip: none;
    -webkit-text-fill-color: initial;
    color: ${mainColor};
  }
`;

export const TogglerWrapper = styled.li`
  position: relative;
  list-style: none;
  width: 100%;
  margin-left: 10px;
`;
export const Toggler = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const BarsIcon = styled.i`
  position: absolute;
  color: ${goldColor};
  font-size: 2.5rem;
  display: ${({ toggle }) => (toggle ? 'none' : 'block')};
`;
export const TimesIcon = styled.i`
  position: absolute;
  color: ${goldColor};
  font-size: 2.5rem;
  display: ${({ toggle }) => (toggle ? 'block' : 'none')};
`;

export const BorderOne = styled.b`
  position: absolute;
  top: -20px;
  height: 20px;
  width: 100%;
  background: ${goldGradient};
  display: none;

  &.active {
    display: block;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${navBg};
    border-bottom-right-radius: 20px;
  }
`;

export const BorderTwo = styled.b`
  position: absolute;
  bottom: -20px;
  height: 20px;
  width: 100%;
  background: ${goldGradient};
  display: none;
  &.active {
    display: block;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${navBg};
    border-top-right-radius: 20px;
  }
`;
