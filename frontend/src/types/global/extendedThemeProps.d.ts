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
		page: {
			top: {
				primary: string;
				card: string;
				cardColor: string;
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
		page?: {
			top?: {
				primary?: string;
				card?: string;
				cardColor?: string;
			};
		};
	}
}
