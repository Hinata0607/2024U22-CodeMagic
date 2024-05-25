import '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		layout: {
			topLayout: {
				main: string;
			};
		};
	}
	interface PaletteOptions {
		layout?: {
			topLayout?: {
				main?: string;
			};
		};
	}
}
