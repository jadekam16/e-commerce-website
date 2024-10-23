'use client'

import styled from "styled-components"

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${ props => props.theme.spacing.medium };
  padding-top: 70px;
`

export const Title = styled.h1`
  color: ${ props => props.theme.colors.text };
  font-size: 2rem;
  margin-bottom: ${ props => props.theme.spacing.large }
`

export const Button = styled.button`
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(45deg, #FF6B6B, #FF8E53);
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.2);
  }
`;