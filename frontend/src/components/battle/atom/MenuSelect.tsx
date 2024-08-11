import { Box } from '@mui/material';
import React from 'react';

export const MenuSelect = () => {
	return (
		<>
			<Box sx={{ display: 'flex', gap: '10px' }}>
				<Box
					sx={{
						marginTop: '10px',
						width: '50%',
						height: '250px',
						bgcolor: '#d9d9d9',
					}}
				>
					スキル
				</Box>
				<Box
					sx={{
						width: '50%',
					}}
				>
					<Box
						sx={{
							marginTop: '10px',
							height: '120px',
							bgcolor: '#d9d9d9',
						}}
					>
						バッグ
					</Box>
					<Box
						sx={{
							marginTop: '10px',
							height: '120px',
							bgcolor: '#d9d9d9',
						}}
					>
						逃げる
					</Box>
				</Box>
			</Box>
		</>
	);
};
