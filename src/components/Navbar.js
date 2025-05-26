import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaPaw } from 'react-icons/fa';

const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: var(--shadow);
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
`;

const NavLogo = styled(Link)`
  color: var(--primary-color);
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  
  svg {
    margin-right: 10px;
    font-size: 1.8rem;
  }
`;

const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--primary-color);
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
  }
`;

const NavItem = styled.li`
  height: 80px;
  
  @media screen and (max-width: 768px) {
    height: 60px;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-color);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  position: relative;
  
  &:hover {
    color: var(--primary-color);
    transition: var(--transition);
  }
  
  &.active {
    color: var(--primary-color);
    font-weight: 600;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 25px;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 3px;
      background-color: var(--primary-color);
      border-radius: 10px;
    }
  }
  
  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    
    &.active::after {
      bottom: 15px;
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const location = useLocation();
  
  const toggleNav = () => setIsOpen(!isOpen);
  
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/">
          <FaPaw />
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Dog of Wisdom
          </motion.span>
        </NavLogo>
        <MobileIcon onClick={toggleNav}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLink 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/gallery" 
              className={location.pathname === '/gallery' ? 'active' : ''}
            >
              Gallery
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/achievements" 
              className={location.pathname === '/achievements' ? 'active' : ''}
            >
              Achievements
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/quotes" 
              className={location.pathname === '/quotes' ? 'active' : ''}
            >
              Quotes
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/testimonials" 
              className={location.pathname === '/testimonials' ? 'active' : ''}
            >
              Testimonials
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/services" 
              className={location.pathname === '/services' ? 'active' : ''}
            >
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/blog" 
              className={location.pathname === '/blog' ? 'active' : ''}
            >
              Blog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;