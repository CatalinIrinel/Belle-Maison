import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
	CardTexts,
	Ribbon,
	RibbonContainer,
	RibbonText,
	ServicesCard,
	ServicesContainer,
	ServicesH1,
	ServicesH2,
	ServicesP,
	ServicesWrapper,
} from './PacksElements';
import data from '../../data';
import Modal from './Modal';

function Packs() {
	const [showModal, setShowModal] = useState(false);
	const [packId, setPackId] = useState('');
	const [getData, setGetData] = useState([]);

	const modalHandlerOpen = (e) => {
		setShowModal((prev) => !prev);
		const packIds = parseInt(e.currentTarget.id);
		setPackId(packIds);
		setGetData(data.packs.filter((item) => item._id === packIds));
	};

	useEffect(() => {
		Aos.init({ disable: 'phone' });
	}, []);
	return (
		<>
			<ServicesContainer id='packs'>
				<ServicesH1>Alege pachetul perfect pentru locuinta ta</ServicesH1>
				<ServicesWrapper>
					{data.packs.map((pack) => {
						return (
							<ServicesCard
								key={pack._id}
								data-aos={pack.fade}
								data-aos-duration='2000'
								data-aos-easing='ease-in-out'
								data-aos-delay='200'
								id={pack._id}
								onClick={modalHandlerOpen}
							>
								<RibbonContainer>
									<Ribbon>
										<RibbonText>
											<ServicesH2>{pack.name}</ServicesH2>
										</RibbonText>
									</Ribbon>
								</RibbonContainer>
								<CardTexts>
									<ServicesP>{pack.subtitle}</ServicesP>
									<ServicesP className='pret'>{pack.price}</ServicesP>
								</CardTexts>
							</ServicesCard>
						);
					})}
					{showModal ? (
						<Modal
							showModal={showModal}
							setShowModal={setShowModal}
							packId={packId}
							getData={getData}
						/>
					) : null}
				</ServicesWrapper>
			</ServicesContainer>
		</>
	);
}

export default Packs;
