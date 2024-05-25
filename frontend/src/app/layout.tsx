import { defaultTheme } from '@/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Code Magic',
	description: '学習したコードが魔法になる！',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="jp">
			<ThemeProvider theme={defaultTheme}>
				<body>
					<CssBaseline />
					{children}
				</body>
			</ThemeProvider>
		</html>
	);
}
