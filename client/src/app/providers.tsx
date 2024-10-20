'use client'

import React from 'react'
import { ThemeProvider } from 'styled-components'

// Defining the theme --> add more attributes as needed.
const theme = {
  // TO BE CHANGED AS NEEDED 
  colors: {
    primary: '#A8D8EA',  // Soft pastel blue
    secondary: '#FCBAD3', // Light pastel pink
    accent: '#FFFFD2',   // Pale pastel yellow
    background: '#FFFFFF', // White
    text: '#333333',     // Dark gray for text
    lightText: '#666666', // Lighter gray for secondary text
    border: '#E0E0E0',   // Light gray for borders
  },
  fonts: {
    main: "'Roboto', sans-serif",
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
  transitions: {
    default: '0.3s ease',
  }
}

export type Theme = typeof theme;

export default function StyledComponentsProvider ( { children }: { children: React.ReactNode } ) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}