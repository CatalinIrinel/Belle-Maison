import Aos from 'aos';
import React, { useEffect } from 'react';
import { colabsObject } from '../Data';
import {
	ColabsCard,
	ColabsContainer,
	ColabsLogo,
	ColabsName,
	ColabsRow,
	ColabsText,
	ColabsTopRow,
	ColabsWrapper,
	LogoImg,
	Title,
} from './ColabsElements';

function Colabs() {
	useEffect(() => {
		Aos.init({ disable: 'phone' });
	}, []);
	return (
		<ColabsContainer id='colabs'>
			<ColabsWrapper>
				<ColabsTopRow>
					<Title>Colaboratorii noștri</Title>
				</ColabsTopRow>
				<ColabsRow>
					{colabsObject.map((colab) => {
						return (
							<a
								key={colab._id}
								href={colab.link}
								target='_blank'
								rel='noreferrer noopener'
							>
								<ColabsCard
									data-aos={colab.dataAosCard}
									data-aos-duration={colab.duration}
									data-aos-easing='ease-in-out'
									data-aos-delay='200'
								>
									<ColabsLogo>
										<LogoImg src={colab.logo} alt={colab.alt} />
									</ColabsLogo>
									<ColabsText>
										<ColabsName textColor={colab.textColor}>
											{colab.alt}
										</ColabsName>
									</ColabsText>
								</ColabsCard>
							</a>
						);
					})}
				</ColabsRow>
			</ColabsWrapper>
		</ColabsContainer>
	);
}

export default Colabs;
