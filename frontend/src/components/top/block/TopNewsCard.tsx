import { Avatar, Box, Card, Typography } from '@mui/material';

export const TopNewsCard = () => {
	const HEIGHT = 120;

	return (
		<Card
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '15px',
				width: '100%',
				maxWidth: '100vw',
				height: `${HEIGHT}px`,
				p: '5px',
				backgroundColor: 'page.top.card',
			}}
		>
			<Box
				height="100%"
				borderRadius="5px"
				overflow="hidden"
				sx={{
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
				flexGrow={1}
				display="flex"
				flexDirection="column"
				height="100%"
				sx={{ backgroundColor: '#aff' }}
			>
				<Box>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						<Typography
							sx={{
								color: 'page.top.cardColor',
							}}
							fontWeight="bold"
							variant="h6"
						>
							aaaaaaaaaaaaaa
						</Typography>
						<Typography
							sx={{
								color: 'page.top.cardColor',
							}}
							fontWeight="bold"
							variant="h6"
						>
							aaaaaaaaaaaaaa
						</Typography>
					</Box>
				</Box>
				<Box flexGrow={1} sx={{ backgroundColor: '#ffa' }}>
					<Typography
						sx={{
							color: 'page.top.cardColor',
						}}
					></Typography>
				</Box>
			</Box>
		</Card>
	);
};
