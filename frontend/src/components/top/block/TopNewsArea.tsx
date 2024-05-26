'use client';
import { TopNewsAreaProps } from '@/types';
import { Box } from '@mui/material';
import { TopGameStartButton } from '../atom';
import { useBreakPoint } from '@/hooks';

export const TopNewsArea = ({ children }: TopNewsAreaProps) => {
	const breakpoint = useBreakPoint();
	const NEWSCARD_GAP = 20;

	return (
		<Box
			position="relative"
			width="100vw"
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
				p={breakpoint === 'xs' ? '50px 0' : '100px 0'}
			>
				<TopGameStartButton isFix={breakpoint === 'xs'}/>
				{children}
			</Box>
		</Box>
	);
};
