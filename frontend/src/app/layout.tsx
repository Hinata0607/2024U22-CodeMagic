import { TopLayout } from '@/layouts';
import { defaultTheme } from '@/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { Metadata } from 'next';
import "./global.css";

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
					<TopLayout>{children}</TopLayout>
				</body>
			</ThemeProvider>
		</html>
	);
}
