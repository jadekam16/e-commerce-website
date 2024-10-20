'use client'

import styled from "styled-components"

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${ props => props.theme.spacing.medium };
`

export const Title = styled.h1`
  color: ${ props => props.theme.colors.text };
  font-size: 2rem;
  margin-bottom: ${ props => props.theme.spacing.large }
`

export const Button = styled.button`
  background-color: ${ props => props.theme.colors.primary };
  color: ${ props => props.theme.colors.text };
  border: none;
  border-radius: 4px;
  padding: ${ props => props.theme.spacing.small } ${ props => props.theme.spacing.medium };
  cursor: pointer;
  transition: background-color ${ props => props.theme.transitions.default };
  
  &:hover {
    background-color: ${ props => props.theme.colors.secondary };
  }
`