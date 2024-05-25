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
			<Typography color="layout.topLayout.color">{title}</Typography>
		</Link>
	);
};
