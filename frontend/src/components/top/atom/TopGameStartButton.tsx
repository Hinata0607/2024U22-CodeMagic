import { TopGameStartButtonProps } from '@/types';
import { Button } from '@mui/material';

export const TopGameStartButton = ({
	isFix = false
}: TopGameStartButtonProps) => {
	return (
		<Button
			color="primary"
			variant="contained"
			sx={
				isFix
					? {
                        width: '500px',
                        height: '60px',
                        maxWidth: '90vw',
                        margin: '0 auto',
                        fontSize: '1.5rem',
						}
					: {
							zIndex: 50,
							position: 'absolute',
							top: 0,
							right: 0,
							left: 0,
							width: '500px',
							height: '70px',
							maxWidth: '90vw',
							margin: '0 auto',
							transform: 'translateY(-50%)',
							fontSize: '1.5rem',
						}
			}
		>
			GAME START
		</Button>
	);
};
