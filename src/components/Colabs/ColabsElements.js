import styled from 'styled-components/macro';

// const orange = '#dc5526';
const darkblue = '#313f5c';

export const ColabsContainer = styled.div`
	height: 60vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: linear-gradient(
		130deg,
		rgba(255, 255, 255, 0.1),
		rgba(221, 196, 188, 0.4)
	);
	@media screen and (max-width: 575.98px) {
		height: auto;
	}
`;
export const ColabsWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	@media screen and (max-width: 768px) {
		padding: 0 60px;
	}
	@media screen and (max-width: 575.98px) {
		height: auto;
		padding: 0;
	}
`;

export const ColabsTopRow = styled.div`
	width: 100%;
	padding: 30px 20px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	text-align: center;
	@media screen and (max-width: 575.98px) {
		text-align: center;
		padding: 20px 0;
	}
`;

export const Title = styled.h1`
	width: 100%;
	font-size: 4.5rem;
	color: ${darkblue};

	@media screen and (max-width: 575.98px) {
		width: 100%;
		font-size: 3rem;
	}
`;

export const ColabsRow = styled.div`
	width: 100%;
	padding: 30px 20px;
	display: flex;
	align-items: flex-start;
	justify-content: space-evenly;

	@media screen and (max-width: 768px) {
		display: grid;
		grid-auto-columns: minmax(auto, 1fr);
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
		justify-items: center;
		width: 100%;
	}

	@media screen and (max-width: 575.98px) {
		display: grid;
		grid-auto-columns: minmax(auto, 1fr);
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 40px;
		align-items: center;

		justify-items: center;
		width: 100%;
	}
`;

export const ColabsCard = styled.div`
	width: 200px;
	height: 200px;
	background-color: #fff;
	box-shadow: 0px 5px 20px black;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	padding: 10px;
	margin-right: 10px;
	border-radius: 20px;

	@media screen and (max-width: 768px) {
		width: 100px;
		height: 100px;
		margin-right: 0;
		margin-bottom: 30px;
	}

	@media screen and (max-width: 575.98px) {
		width: 100px;
		height: 100px;
		margin-right: 0;
		margin-bottom: 30px;
	}
`;

export const ColabsLogo = styled.div`
	width: 100%;
	height: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const LogoImg = styled.img`
	height: 100%;
`;

export const ColabsText = styled.div`
	width: 100%;
	height: 20%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #000;

	@media screen and (max-width: 768px) {
		display: none;
	}

	@media screen and (max-width: 575.98px) {
		display: none;
	}
`;

export const ColabsName = styled.h2``;
