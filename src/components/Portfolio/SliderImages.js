import React from 'react';
import { ImageWrapper, SlideImage } from './PortfolioElements';

function SliderImages({ property }) {
	const { src, alt } = property;

	return (
		<>
			<ImageWrapper>
				<SlideImage src={src} alt={alt} />
			</ImageWrapper>
		</>
	);
}

export default SliderImages;
