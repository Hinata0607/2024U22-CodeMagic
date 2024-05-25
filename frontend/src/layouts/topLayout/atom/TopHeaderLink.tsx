import { TopHeaderLinkProps } from '@/types';
import { Typography } from '@mui/material';
import Link from 'next/link';

export const TopHeaderLink = ({ link, title }: TopHeaderLinkProps) => {
	return (
		<Link
			href={link}
			style={{
				textDecoration: 'none',
			}}
		>
			<Typography
				color="layout.topLayout.color"
				sx={{
					transform: 'scale(1)',
					transition: 'transform 0.4s ease-in-out, color 0.4s ease-in-out',
					'&:hover': {
						transform: 'scale(1.2)',
						color: 'layout.topLayout.hoverColor',
					},
				}}
			>
				{title}
			</Typography>
		</Link>
	);
};
