'use client'

import { Container, Title } from "@/components/StyledComponents";
import styled from 'styled-components'
import React, { useState } from 'react'

const FormContainer = styled.div`
  max-width: 500p; 
  margin: 0 auto;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 4px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    /* Change COLOR HERE COS ITS UGLY */
    border-color: ${ props => props.theme.colors.secondary }
  }
`

const Button = styled.button`
  background-color: ${ props => props.theme.colors.primary };
  border: none;
  border-radius: 17px;
  padding: 10px 20px;
  transition: background-color 0.2s;

  &:hover {
    background: ${ props => props.theme.colors.secondary }
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`

export default function ContactPage () {

  // set form data state 
  const [ formData, setFormData ] = useState( {
    name: '',
    email: '',
    subject: '',
    message: ''
  } )

  const [ error, setErrors ] = useState( {} )

  const validateForm = () => {
    const newErrors = {}

    /* if ( !formData.name ) {
      newErrors.name = 'Name is required'
    } */
  }

  const handleChange = ( e: any ) => {
    const { name, value } = e.target;
    setFormData( prev => ( {
      ...prev,
      [ name ]: value
    } ) );
  }

  const handleSubmit = ( e: any ) => {
    e.preventDefault();
    // have to set up the API here to send the form to the backend

    // PLACEHOLDER: seems to be working though when I press submit
    console.log( "Form Submitted" )
  }

  return (
    <Container>
      <FormContainer>
        <Title> Contact Us </Title>
        <StyledForm onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="name">Name</label>
            <Input
              id='name'
              name='name'
              type='name'
              value={formData.name}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <Input
              id='email'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="subject">Subject</label>
            <Input
              id='subject'
              name='subject'
              type='subject'
              value={formData.subject}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="message">Message</label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
            />
          </FormGroup>
          <Button type="submit">Send Message</Button>
        </StyledForm>
      </FormContainer>
    </Container>
  );
}
