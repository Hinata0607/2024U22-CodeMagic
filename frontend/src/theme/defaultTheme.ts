'use client';
import { createTheme } from '@mui/material';

export const defaultTheme = createTheme({
	palette: {
		mode: 'dark',
		layout: {
			topLayout: {
				primary: '#111',
				color: '#aaa',
				hoverColor: '#fff',
			},
		},
	},
});
