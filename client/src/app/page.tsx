'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import Image from 'next/image';
import landing from '@/assets/landing.jpeg';
import { Button } from '@/components/StyledComponents';

const HeroContainer = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #FFE0EC 0%, #FFF4D9 100%);
  overflow: hidden;
`;

const BackgroundCircles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0.5;

  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: linear-gradient(to right, #FFC8DD, #FFB3C6);
    top: -100px;
    right: -100px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(to right, #FFDAB9, #FFE4B5);
    bottom: -50px;
    left: -50px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const TextContent = styled.div`
  position: relative;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  color: #343A40;
  
  span {
    display: block;
    background: linear-gradient(45deg, #FF6B8B, #FFA07A);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-style: italic;
  }
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  color: #495057;
  max-width: 500px;
  position: relative;

  @media (max-width: 968px) {
    margin: 0 auto 2.5rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 20px 20px 60px rgba(0,0,0,0.1);
  background: white;
  padding: 2rem;
  
  @media (max-width: 968px) {
    height: 400px;
    margin-top: 2rem;
  }
`;

const StyledButton = styled( Button )`
  background: linear-gradient(45deg, #FF6B8B, #FFA07A);
  color: white;
  padding: 1.2rem 3rem;
  border-radius: 3rem;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 15px rgba(255, 107, 139, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 139, 0.3);
  }
`;

export default function Home () {
  const router = useRouter();

  return (
    <HeroContainer>
      <BackgroundCircles />
      <ContentWrapper>
        <TextContent>
          <Title>
            Fresh & Tasty
            <span>Bubble Tea</span>
          </Title>
          <Subtitle>
            Explore our handcrafted selection of authentic bubble tea drinks,
            made with premium ingredients and lots of love
          </Subtitle>
          <StyledButton onClick={() => router.push( '/products' )}>
            SHOP NOW
          </StyledButton>
        </TextContent>
        <ImageWrapper>
          <Image
            src={landing}
            alt="Delicious bubble tea selection"
            fill
            style={{
              objectFit: 'contain',
            }}
            priority
          />
        </ImageWrapper>
      </ContentWrapper>
    </HeroContainer>
  );
}