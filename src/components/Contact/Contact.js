import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

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
				'service_lighthouse',
				'template_lighthouse',
				form.current,
				'lighthouse-user_id'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<ContactContainer id='contact'>
			<ContactTitle>
				<Title>
					Ai nelămuriri ? <br />
					Vrei mai multe detalii ? <br />
					<TitleColor>Contactează-ne!</TitleColor>
				</Title>
			</ContactTitle>
			<ContactWrapper>
				<ContactForm ref={form} onSubmit={sendEmail}>
					<FormLabel>Numele și prenumele:</FormLabel>
					<FormInput
						name='name'
						type='text'
						placeholder='Numele și prenumele tău'
						required
					/>
					<FormLabel>Email:</FormLabel>
					<FormInput
						name='email'
						type='email'
						placeholder='Email-ul tău'
						required
					/>
					<FormLabel>Mesajul: </FormLabel>
					<FormTextArea
						name='message'
						type='text'
						placeholder='Mesajul tău...'
						rows='4'
						cols='50'
						required
					/>
					<FormLabel />
					<FormButtonArea>
						<FromButton type='submit' disabled>Ne implementat. Lipsa mail</FromButton>
					</FormButtonArea>
				</ContactForm>
			</ContactWrapper>
		</ContactContainer>
	);
}

export default Contact;
