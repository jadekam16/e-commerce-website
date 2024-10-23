'use client'

import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavLinks = styled.div`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 0 1.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background: linear-gradient(45deg, #FF6B8B, #FFA07A);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavLink = styled( Link )`
  color: #343A40;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    color: #FF6B8B;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: #343A40;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: #FF6B8B;
    background: rgba(255, 107, 139, 0.1);
    transform: translateY(-2px);
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: linear-gradient(45deg, #FF6B8B, #FFA07A);
  color: white;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
`;

const SearchOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  height: ${ props => props.isOpen ? '100px' : '0' };
  opacity: ${ props => props.isOpen ? '1' : '0' };
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const SearchInput = styled.input`
  width: 50%;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  background: rgba(255, 107, 139, 0.1);
  font-size: 1.1rem;
  color: #343A40;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 107, 139, 0.3);
    width: 60%;
  }
`;

const Navbar: React.FC = () => {
  const [ isScrolled, setIsScrolled ] = useState( false );
  const [ isSearchOpen, setIsSearchOpen ] = useState( false );
  const [ cartCount, setCartCount ] = useState( 2 ); // Example cart count

  useEffect( () => {
    const handleScroll = () => {
      setIsScrolled( window.scrollY > 20 );
    };

    window.addEventListener( 'scroll', handleScroll );
    return () => window.removeEventListener( 'scroll', handleScroll );
  }, [] );

  return (
    <>
      <SearchOverlay isOpen={isSearchOpen}>
        <SearchInput
          placeholder="Search for drinks..."
          autoFocus={isSearchOpen}
        />
      </SearchOverlay>

      <Nav>
        <NavContainer>
          <NavLinks>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/products">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </NavLinks>

          <IconsWrapper>
            <IconButton
              aria-label="Search"
              onClick={() => setIsSearchOpen( !isSearchOpen )}
            >
              <Search size={20} />
            </IconButton>
            <IconButton aria-label="User account">
              <User size={20} />
            </IconButton>
            <IconButton aria-label="Shopping cart">
              <ShoppingCart size={20} />
              <CartCount>{cartCount}</CartCount>
            </IconButton>
          </IconsWrapper>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;