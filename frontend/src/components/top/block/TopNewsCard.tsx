import { TopNewsCardProps } from '@/types';
import { Avatar, Box, Card, Typography } from '@mui/material';

export const TopNewsCard = ({ title, date, body }: TopNewsCardProps) => {
	return (
		<Card
			sx={{
				display: 'grid',
				gridTemplateColumns: '200px 1fr',
				width: '100%',
				height: '120px',
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
					display: 'grid',
					gridTemplateRows: '25px 1fr',
					width: '100%',
					height: '100%',
					backgroundColor: '#aff',
					overflow: 'hidden',
				}}
			>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: '80% 20%',
						gap: "10px",
						width: '100%',
						height: '25px',
						overflow: 'hidden',
					}}
				>
					<Typography
						sx={{
							display: 'inline-block',
							lineHeight: "25px",
							height: '100%',
							width: '100%',
							color: 'page.top.cardColor',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
						}}
						fontWeight="bold"
						variant="h6"
					>
						{title}
					</Typography>
					<Typography
						sx={{
							display: 'inline-block',
							lineHeight: "25px",
							width: '100%',
							height: '100%',
							color: 'page.top.cardColor',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							backgroundColor: '#afa',
						}}
						variant="body1"
					>
						{date}
					</Typography>
				</Box>
				<Box sx={{ backgroundColor: '#ffa', overflow: 'hidden' }}>
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
