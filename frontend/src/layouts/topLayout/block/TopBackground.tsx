import { Avatar, Box } from '@mui/material';
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
				sx={{
					aspectRatio: '16/9',
				}}
			>
				<Avatar
					src="/thumbnail.webp"
					alt="background"
					variant="square"
					style={{
						width: '100%',
						height: '100%',
					}}
				/>
			</Box>
		</>
	);
};
