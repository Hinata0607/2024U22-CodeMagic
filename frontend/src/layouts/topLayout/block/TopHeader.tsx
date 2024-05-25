import { TopHeaderProps } from '@/types';
import { Box } from '@mui/material';

export const TopHeader = ({ children }: TopHeaderProps) => {
	const HEIGHT = 70;
	const MAX_HEIGHT = 30;

	return (
		<>
			<Box
				zIndex={100}
				position="fixed"
				top={0}
				left={0}
				display="flex"
				justifyContent="start"
				alignItems="center"
				gap="50px"
				width="100vw"
				height={`${HEIGHT}px`}
				maxHeight={`${MAX_HEIGHT}vh`}
				p="0 50px"
				sx={{
					backgroundColor: 'layout.topLayout.primary',
				}}
			>
				{children}
			</Box>
			<Box width="100vw" height={`${HEIGHT}px`} maxHeight={`${MAX_HEIGHT}vh`} />
		</>
	);
};
