import '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		layout: {
			topLayout: {
				primary: string;
				color: string;
			};
		};
	}
	interface PaletteOptions {
		layout?: {
			topLayout?: {
				primary?: string;
				color?: string;
			};
		};
	}
}
