'use client';
import { createTheme } from '@mui/material';
import { pink } from '@mui/material/colors';

export const defaultTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: pink["A400"],
		},
		layout: {
			topLayout: {
				primary: '#111',
				color: '#aaa',
				hoverColor: '#fff',
			},
		},
		page: {
			top: {
				primary: '#111',
				card: '#fff',
				cardColor: '#000',
			},
		},
	},
});
