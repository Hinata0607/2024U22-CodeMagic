import '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		layout: {
			topLayout: {
				primary: string;
				color: string;
				hoverColor: string;
			};
		};
	}
	interface PaletteOptions {
		layout?: {
			topLayout?: {
				primary?: string;
				color?: string;
				hoverColor?: string;
			};
		};
	}
}
