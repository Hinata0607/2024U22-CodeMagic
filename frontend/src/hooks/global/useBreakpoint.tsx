import { useMediaQuery, useTheme } from '@mui/material';

export const useBreakPoint = (): { breakpoint: string | undefined } => {
	const theme = useTheme();

	const isXs = useMediaQuery(theme.breakpoints.only('xs'));
	const isSm = useMediaQuery(theme.breakpoints.only('sm'));
	const isMd = useMediaQuery(theme.breakpoints.only('md'));
	const isLg = useMediaQuery(theme.breakpoints.only('lg'));
	const isXl = useMediaQuery(theme.breakpoints.only('xl'));

	const breakpoint = isXs
		? 'xs'
		: isSm
			? 'sm'
			: isMd
				? 'md'
				: isLg
					? 'lg'
					: isXl
						? 'xl'
						: undefined;

	return {
		breakpoint,
	};
};
