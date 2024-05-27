'use client';
import { useBreakPoint } from '@/hooks';
import { TopNewsCardProps } from '@/types';
import { Avatar, Box, Card, Typography } from '@mui/material';

export const TopNewsCard = ({ title, date, body }: TopNewsCardProps) => {
	const breakpoint = useBreakPoint();

	return (
		<Card
			sx={{
				display: 'grid',
				gridTemplateColumns: breakpoint === 'xs' ? '' : '200px 1fr',
				gridTemplateRows: breakpoint === 'xs' ? 'auto auto' : '',
				gap: '20px',
				width: '100%',
				height: 'auto',
				p: '5px',
				backgroundColor: 'page.top.card',
				cursor: 'pointer',
			}}
		>
			<Box
				sx={{
					height: '100%',
					borderRadius: '5px',
					overflow: 'hidden',
					aspectRatio: '16/9',
				}}
			>
				<Avatar
					variant="square"
					src="/thumbnail.webp"
					sx={{
						width: '100%',
						height: '100%',
					}}
				/>
			</Box>
			<Box
				sx={{
					display: breakpoint === 'xs' ? "flex" : 'grid',
					flexDirection: "column",
					gridTemplateRows: '25px 1fr',
					gap: '10px',
					width: '100%',
					height: '100%',
					overflow: 'hidden',
				}}
			>
				<Box
					sx={{
						display: breakpoint === 'xs' ? "flex" : 'grid',
						flexDirection: "column",
						gridTemplateColumns: breakpoint === 'xs' ? '' : '1fr 100px',
						gridTemplateRows: breakpoint === 'xs' ? 'auto auto' : '',
						gap: breakpoint === 'xs' ? "10px" : '30px',
						width: '100%',
						height: breakpoint === 'xs' ? "fit-content" : '25px',
						overflow: 'hidden',
					}}
				>
					<Typography
						sx={{
							display: breakpoint === 'xs' ? '-webkit-box' : 'inline-block',
							lineHeight: '25px',
							height: '100%',
							width: breakpoint === 'xs' ? "100%" : 'calc(100% - 30px)',
							color: 'page.top.cardColor',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							whiteSpace: breakpoint === 'xs' ? "normal" : 'nowrap',
							wordBreak: breakpoint === 'xs' ? 'break-all' : "normal",
							WebkitLineClamp: 3,
							WebkitBoxOrient: 'vertical',
						}}
						fontWeight="bold"
						variant="h6"
					>
						{title}
					</Typography>
					<Typography
						sx={{
							display: 'inline-block',
							lineHeight: '25px',
							width: breakpoint === 'xs' ? "100%" : 'calc(100% - 30px)',
							height: '100%',
							color: 'page.top.cardColor',
							textAlign: breakpoint === 'xs' ? "left" : "right",
						}}
						variant="body1"
					>
						{date}
					</Typography>
				</Box>
				<Box sx={{ overflow: 'hidden' }}>
					<Typography
						sx={{
							width: '100%',
							color: 'page.top.cardColor',
							wordBreak: 'break-all',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							display: '-webkit-box',
							WebkitLineClamp: 3,
							WebkitBoxOrient: 'vertical',
						}}
					>
						{body}
					</Typography>
				</Box>
			</Box>
		</Card>
	);
};
