import React from 'react';
import { FaFacebook, FaInstagram, FaRegCopyright } from 'react-icons/fa';
import {
  FooterContainer,
  FooterLogo,
  FooterLogoContainer,
  FooterWrap,
  SocialIcons,
  SocialIconsLink,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from './FooterElem';

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo>
                <FooterLogoContainer to="/">
                  <FooterLogo
                    src="/images/LogoBelleWide.png"
                    alt="Belle Maison Design Studio"
                  />
                </FooterLogoContainer>
              </SocialLogo>
              <WebsiteRights>
                Belle Maison Studio <FaRegCopyright /> <br />
                {new Date().getFullYear()} All rights reserved
              </WebsiteRights>
              <SocialIcons>
                <SocialIconsLink
                  href="https://www.facebook.com/bellemaisonstudio"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconsLink>
                <SocialIconsLink
                  href="https://www.instagram.com/belle.maisonstudio/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconsLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
}

export default Footer;
