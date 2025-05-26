import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPaw, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #29b6f6, #4fc3f7);
  padding: 4rem 0 2rem 0;
  color: #fff;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2rem;
  padding: 0 2rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled(Link)`
  color: #fff;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  
  svg {
    margin-right: 10px;
    font-size: 1.8rem;
  }
  
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const FooterDescription = styled.p`
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: var(--transition);
  
  &:hover {
    color: #ffcc80;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin-right: 1rem;
  transition: var(--transition);
  
  &:hover {
    color: #ffcc80;
    transform: translateY(-2px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterColumn>
          <FooterLogo to="/">
            <FaPaw />
            Dog of Wisdom
          </FooterLogo>
          <FooterDescription>
            Floating through the cosmos, dispensing wisdom and enlightenment to
            all who seek it.
          </FooterDescription>
          <SocialIcons>
            <SocialIconLink
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="https://youtube.com"
              target="_blank"
              aria-label="YouTube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="https://tiktok.com"
              target="_blank"
              aria-label="TikTok"
            >
              <FaTiktok />
            </SocialIconLink>
          </SocialIcons>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>About</FooterTitle>
          <FooterLink to="/about">Biography</FooterLink>
          <FooterLink to="/achievements">Achievements</FooterLink>
          <FooterLink to="/quotes">Wisdom Quotes</FooterLink>
          <FooterLink to="/gallery">Gallery</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Services</FooterTitle>
          <FooterLink to="/services">Meme Counseling</FooterLink>
          <FooterLink to="/services">Zen Barking</FooterLink>
          <FooterLink to="/services">Dream Appearances</FooterLink>
          <FooterLink to="/contact">Request Services</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Connect</FooterTitle>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/testimonials">Testimonials</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterColumn>
      </FooterWrapper>

      <Copyright>{new Date().getFullYear()} - Wisdom freely given.</Copyright>
    </FooterContainer>
  );
};

export default Footer;