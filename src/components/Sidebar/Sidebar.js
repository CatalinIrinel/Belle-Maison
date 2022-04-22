import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElem';

const Sidebar = ({ isOpen, mobileToggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={mobileToggle}>
      <Icon onClick={mobileToggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="hero"
            onClick={mobileToggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Acasa
          </SidebarLink>
          <SidebarLink
            to="about"
            onClick={mobileToggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Despre
          </SidebarLink>
          <SidebarLink
            to="portfolio"
            onClick={mobileToggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Portofoliu
          </SidebarLink>
          {/* <SidebarLink
            to="services"
            onClick={mobileToggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Servicii
          </SidebarLink> */}
          <SidebarLink
            to="contact"
            onClick={mobileToggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
