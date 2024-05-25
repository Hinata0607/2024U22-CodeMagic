'use client';
import { createTheme } from '@mui/material';

export const defaultTheme = createTheme({
	palette: {
		background: {
			default: '#fff',
		},
		layout: {
			topLayout: {
				primary: '#000',
				color: '#fff',
			},
		},
	},
});
