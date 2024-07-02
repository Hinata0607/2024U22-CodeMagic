import SettingsIcon from '@mui/icons-material/Settings';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import React from 'react';

const GameTopHeader = () => {
	return (
		<div
			style={{
				position: 'relative',
				height: '120px',
				backgroundColor: '#999',
			}}
		>
			<ArrowCircleLeftIcon
				style={{
					position: 'absolute',
					top: '5vh',
					left: '3vw',
					fontSize: '48px',
					color: 'white',
					backgroundColor: 'transparent',
					borderRadius: '50%',
				}}
			/>
			<SettingsIcon
				style={{
					position: 'absolute',
					top: '5vh',
					right: '3vw',
					fontSize: '48px',
					color: 'white',
					backgroundColor: 'transparent',
				}}
			/>
		</div>
	);
};

export default GameTopHeader;
