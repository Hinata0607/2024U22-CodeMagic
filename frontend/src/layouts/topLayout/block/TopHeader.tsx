import { Box } from '@mui/material';

export const TopHeader = () => {
	const HEIGHT = 70;
	const MAX_HEIGHT = 30;

	return (
		<>
			<Box
				position={'fixed'}
				top={0}
				left={0}
				width={'100vw'}
				height={`${HEIGHT}px`}
				maxHeight={`${MAX_HEIGHT}vh`}
				sx={{
					backgroundColor: '#000',
				}}
			></Box>
			<Box
				width={'100vw'}
				height={`${HEIGHT}px`}
				maxHeight={`${MAX_HEIGHT}vh`}
			/>
		</>
	);
};
