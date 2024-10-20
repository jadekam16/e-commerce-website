'use client'

import { Container, Title, Button } from '@/components/StyledComponents'
import { useRouter } from 'next/navigation';

export default function Home () {
  const router = useRouter();

  const handleClick = () => {
    router.push( '/products' );
  }

  return (
    <Container>
      <Title>Home Page</Title>
      <Button onClick={handleClick}>Shop Now</Button>
    </Container>
  );
}
