import { Box } from '@mui/material';
import React from 'react';
import { MenuSelect } from '../atom/MenuSelect';

export const BattleMenu = () => {
	return (
		<>
			<Box sx={{ width: '1200px', margin: 'auto' }}>
				<MenuSelect />
			</Box>
		</>
	);
};
