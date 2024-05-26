import { TopNewsAreaProps } from '@/types';
import { Box } from '@mui/material';

export const TopNewsArea = ({ children }: TopNewsAreaProps) => {
	const NEWSCARD_GAP = 20;

	return (
		<Box
			width="100vw"
			height="1000px"
			sx={{
				backgroundColor: 'page.top.primary',
			}}
		>
			<Box
				position="relative"
				display="flex"
				justifyContent="start"
				alignItems="center"
				flexDirection="column"
				gap={`${NEWSCARD_GAP}px`}
				width="1000px"
				height="100%"
				maxWidth="90vw"
				m="0 auto"
				p="100px 0"
			>
				{children}
			</Box>
		</Box>
	);
};
