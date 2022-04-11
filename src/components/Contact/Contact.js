import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import {
  ContactContainer,
  ContactForm,
  ContactTitle,
  ContactWrapper,
  FormButtonArea,
  FormInput,
  FormLabel,
  FormTextArea,
  FromButton,
  Title,
  TitleColor,
} from './ContactElements';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_belle',
        'Contact_belle',
        form.current,
        'NTMYpevLpsR1VysKs'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.getElementById('form').reset();
  };
  return (
    <ContactContainer id="contact">
      <ContactTitle>
        <Title>
          Ai nelămuriri ? <br />
          Vrei mai multe detalii ? <br />
          <TitleColor>Contactează-ne!</TitleColor>
        </Title>
      </ContactTitle>
      <ContactWrapper>
        <ContactForm id="form" ref={form} onSubmit={sendEmail}>
          <FormLabel>Numele și prenumele: *</FormLabel>
          <FormInput name="user_name" type="text" required />
          <FormLabel>Email: *</FormLabel>
          <FormInput name="user_email" type="text" required />
          <FormLabel>Mesajul: *</FormLabel>
          <FormTextArea name="message" rows="4" cols="50" required />
          <FormLabel />
          <FormButtonArea>
            <FromButton type="submit">Trimite mesajul</FromButton>
          </FormButtonArea>
        </ContactForm>
      </ContactWrapper>
    </ContactContainer>
  );
}

export default Contact;
