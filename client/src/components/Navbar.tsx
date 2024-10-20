'use client'

import React from 'react'
import { ShoppingCart, User, Search, Menu } from 'lucide-react'
import Link from 'next/link'
import styled from 'styled-components'

const NavContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`

const Nav = styled.div`
  background-color: ${ props => props.theme.colors.primary };
  padding: ${ props => props.theme.spacing.medium };
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 50px;
`

const NavLinks = styled.div`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const NavLink = styled( Link )`
  color: ${ props => props.theme.colors.text };
  text-decoration: none;
  transition: color ${ props => props.theme.transitions.default };

  &:hover {
    color: ${ props => props.theme.colors.secondary }
  }
`

const NavItem = styled.li`
  margin-left: ${ props => props.theme.spacing.large }
`

const IconButton = styled.button`
  background: none;
  border: none;
  color: ${ props => props.theme.colors.text };
  cursor: pointer;
  padding: ${ props => props.theme.spacing.medium };
  margin-top: -20px;
  transition: color ${ props => props.theme.transitions.default };
  
  &:hover {
    color: ${ props => props.theme.colors.secondary };
`

const Navbar: React.FC = () => {
  return (
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

        {/* Icons */}
        <div>
          <IconButton aria-label="Search">
            <Search />
          </IconButton>
          <IconButton aria-label="User account">
            <User />
          </IconButton>
          <IconButton aria-label="Shopping cart">
            <ShoppingCart />
          </IconButton>
        </div>
      </NavContainer>
    </Nav>
  )
}

export default Navbar