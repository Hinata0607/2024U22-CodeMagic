'use client';
import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const defaultTheme = createTheme({
	palette: {
		background: {
			default: grey[900],
		},
	},
});
