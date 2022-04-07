import styled from 'styled-components';

const orange = '#dc5526';
const khaki = '#9A3B1A';

export const ServicesContainer = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	background: #11192a;
	overflow: hidden;
	@media screen and (max-width: 768px) {
		height: auto;
		padding: 5rem 0;
	}

	@media screen and (max-width: 575.98px) {
		height: auto;
		padding: 0 2rem;
		padding-bottom: 3rem;
	}
`;

export const ServicesWrapper = styled.div`
	max-width: 1500px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 8rem;
	padding: 0 50px;

	@media screen and (max-width: 1200px) {
		grid-gap: 3rem;
	}

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 2rem;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
	@media screen and (max-width: 575.98px) {
		padding: 0;
		height: auto;
	}
`;

export const ServicesCard = styled.div`
	width: 400px;
	height: 600px;
	position: relative;
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	border-radius: 20px;
	max-height: 740px;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	cursor: pointer;

	@media screen and (max-width: 768px) {
		width: 350px;
		height: 500px;
	}

	@media screen and (max-width: 575.98px) {
		height: 450px;
		width: 250px;
		padding: 15px;
	}
`;

export const RibbonContainer = styled.div`
	width: 100%;
	background-color: red;
`;

export const Ribbon = styled.i`
	position: absolute;
	top: 40px;
	left: -15px;
	width: 390px;
	height: 80px;
	background: ${orange};
	border-radius: 30px;
	border-bottom-left-radius: 0;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.35);
	&::before {
		content: '';
		position: absolute;
		top: 80px;
		width: 15px;
		height: 40px;
		background: ${khaki};
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		z-index: 2;
	}

	&::after {
		content: '';
		position: absolute;
		top: 80px;
		width: 15px;
		height: 20px;
		background: ${orange};
		z-index: 1;
	}
	@media screen and (max-width: 768px) {
		width: 320px;
	}
	@media screen and (max-width: 575.98px) {
		width: 230px;
	}
`;

export const RibbonText = styled.div`
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ServicesH1 = styled.h1`
	font-size: 4.5rem;
	color: ${orange};
	margin: 64px 0;
	@media screen and (max-width: 768px) {
		font-size: 3rem;
	}

	@media screen and (max-width: 575.98px) {
		margin: 6rem 0;
		font-size: 2rem;
		text-align: center;
	}
`;

export const CardTexts = styled.div`
	width: 100%;
	height: 65%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
	@media screen and (max-width: 575.98px) {
		margin-top: 40px;
	}
`;

export const ServicesH2 = styled.h2`
	font-size: 3rem;
	margin-bottom: 10px;
	color: #fff;
	text-transform: uppercase;
`;

export const ServicesP = styled.p`
	font-size: 2rem;
	text-align: center;
	height: 60%;
	width: 100%;
	color: #000;
	&.pret {
		width: 100%;
		height: 10%;
	}
`;
