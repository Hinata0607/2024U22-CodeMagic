import { TopHeaderProps } from '@/types';
import { Box } from '@mui/material';
import { TopHeaderLogo } from '../atom';
import { useBreakPoint } from '@/hooks';
import { Menu } from '@mui/icons-material';

export const TopHeader = ({ children }: TopHeaderProps) => {

	const breakpoint = useBreakPoint();
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
				justifyContent={["xs", "sm"].includes(breakpoint) ? "space-between" : "start"}
				alignItems="center"
				gap="50px"
				width="100vw"
				height={`${HEIGHT}px`}
				maxHeight={`${MAX_HEIGHT}vh`}
				p={["xs", "sm"].includes(breakpoint) ? "0 25px" : "0 50px"}
				sx={{
					backgroundColor: 'layout.topLayout.primary',
				}}
			>
				<TopHeaderLogo />
				<Box
					display="flex"
					alignItems="center"
					gap="50px"
				>
					{["xs", "sm"].includes(breakpoint) ? <Menu /> : children}
				</Box>
			</Box>
			<Box width="100vw" height={`${HEIGHT}px`} maxHeight={`${MAX_HEIGHT}vh`} />
		</>
	);
};
