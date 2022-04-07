import React, { useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const Background = styled.div`
	position: fixed; /* Stay in place */
	z-index: 11; /* Sit on top */
	top: 0;
	left: 0;
	width: 100%; /* Full width */
	height: 100%; /* Full height */
	overflow: hidden; /* Enable scroll if needed */
	background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	height: 100%;
	margin: 0 auto; /* 15% from the top and centered */
	border: none;
	max-width: 1600px;
	width: 100%; /* Could be more or less, depending on screen size */
`;

function Modal({ showModal, setShowModal, packId, getData }) {
	const list = getData;

	const animation = useSpring({
		config: {
			duration: 250,
		},
		opacity: showModal ? 1 : 0,
		transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
	});

	const closeModal = () => {
		setShowModal(false);
	};

	const keyPress = useCallback(
		(e) => {
			if (e.key === 'Escape' && showModal) {
				setShowModal(false);
			}
		},
		[setShowModal, showModal]
	);

	useEffect(() => {
		document.addEventListener('keydown', keyPress);
		return () => document.removeEventListener('keydown', keyPress);
	});
	return (
		<>
			{showModal ? (
				<Background onClick={closeModal}>
					<animated.div style={animation}>
						<Container>
							<div className='container'>
								<span
									className='close'
									onClick={() => setShowModal((prev) => !prev)}
								>
									&times;
								</span>
								{list.map((item) => {
									return (
										<div className='textArea'>
											<div className='title'>
												<h2>test {item.name}</h2>
												<hr />
											</div>
											<div className='desc'>
												<p>test {item.description}</p>
												<hr />
											</div>
											<div className='price'>
												<p>
													<strong> {item.price} </strong>RON
												</p>
											</div>
										</div>
									);
								})}
							</div>
						</Container>
					</animated.div>
				</Background>
			) : null}
		</>
	);
}

export default Modal;
