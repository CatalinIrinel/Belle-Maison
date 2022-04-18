import React, { useEffect, useState } from 'react';

import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';

import logoIcon from '../../images/LogoIcon.png';
import {
  BarsIcon,
  BorderOne,
  BorderTwo,
  Copyrights,
  Nav,
  NavIcon,
  NavItem,
  NavItems,
  NavLink,
  NavText,
  SocialLinks,
  Socialmedia,
  TimesIcon,
  Toggler,
  TogglerWrapper,
} from './NavbarElements';
import { SidebarData } from './SidebarData';

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [getActive, setGetActive] = useState([]);
  const menuToggle = () => {
    setToggle((prev) => !prev);
  };

  const menuActive = (id) => {
    const list = SidebarData;
    const updateList = list.map((item) => {
      if (item.id === id && item.active === false) {
        return { ...item, active: !item.active };
      }
      return item;
    });
    setGetActive(updateList);
  };
  useEffect(() => {
    setGetActive(SidebarData);
  }, [setGetActive]);
  return (
    <>
      <Nav toggle={toggle}>
        <NavItems toggle={toggle}>
          <TogglerWrapper>
            <Toggler toggle={toggle} onClick={menuToggle}>
              <BarsIcon toggle={toggle} className="fas fa-bars"></BarsIcon>
              <TimesIcon toggle={toggle} className="fas fa-times"></TimesIcon>
            </Toggler>
          </TogglerWrapper>

          {getActive.map((item, index) => {
            return (
              <NavItem
                key={index}
                className={item.active ? 'active' : 'list'}
                toggle={toggle}
              >
                <BorderOne
                  className={item.active ? 'active' : 'list'}
                ></BorderOne>
                <BorderTwo
                  className={item.active ? 'active' : 'list'}
                ></BorderTwo>
                <NavLink
                  to={item.path}
                  smooth={true}
                  duration={1000}
                  onClick={() => {
                    setToggle(false);
                    menuActive(item.id);
                  }}
                  id={item.id}
                >
                  <NavIcon className={item.active ? 'icon active' : 'icon'}>
                    {item.icon}
                  </NavIcon>
                  <NavText className={item.active ? 'title active' : 'title'}>
                    {item.title}
                  </NavText>
                </NavLink>
              </NavItem>
            );
          })}
        </NavItems>
        <NavItems className="footer">
          <Copyrights toggle={toggle}>
            <span>
              <img src={logoIcon} alt="Lighthouse Design Studio" />
              <FaIcons.FaRegCopyright className="copyrights" />{' '}
              {new Date().getFullYear()}
            </span>
            <br /> <p>All rights reserved</p>
          </Copyrights>
          <Socialmedia toggle={toggle}>
            <SocialLinks href="https://www.facebook.com/Bellemaisonstudio-110924024733352">
              <FaIcons.FaFacebook className="icon" />
            </SocialLinks>
            <SocialLinks href="https://www.instagram.com/belle.maisonstudio/">
              <FaIcons.FaInstagram className="icon" />
            </SocialLinks>
          </Socialmedia>
        </NavItems>
      </Nav>
    </>
  );
}

export default Navbar;
