import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export const TopBackground = () => {
	return (
		<>
			<Box
				zIndex={-1}
				position="fixed"
				top={0}
				left={0}
				width="100vw"
				height="100vh"
			>
				<Image
					src="/thumbnail.webp"
					alt="background"
					sizes="100vw"
					fill
					objectFit="cover"
				/>
			</Box>
		</>
	);
};
