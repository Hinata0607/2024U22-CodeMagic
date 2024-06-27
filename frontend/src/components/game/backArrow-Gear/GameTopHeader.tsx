import SettingsIcon from '@mui/icons-material/Settings';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import React from 'react';

const GameTopHeader = () => {
	return (
		<div style={{ display: 'flex' }}>
			<ArrowCircleLeftIcon
				style={{
					position: 'relative',
					margin: '5vh 3vw',
					fontSize: '48px',
				}}
			/>
			<SettingsIcon
				style={{
					position: 'relative',
					margin: '5vh 176vh',
					fontSize: '48px',
				}}
			/>
		</div>
	);
};

export default GameTopHeader;
