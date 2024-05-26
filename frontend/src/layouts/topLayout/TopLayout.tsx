'use client';
import { TopBackground, TopFooter, TopHeader } from './block';
import { TopHeaderLink } from './atom';
import { TopLayoutProps } from '@/types';
import { useBreakPoint } from '@/hooks';

const Links = [
	{ link: 'info', title: 'お知らせ / Info' },
	{ link: 'intro', title: 'ゲーム紹介 / Intro' },
	{ link: 'login', title: 'ログイン / Login' },
];

export const TopLayout = ({ children }: TopLayoutProps) => {
	const breakpoint = useBreakPoint();

	return (
		<>
			<TopHeader>
				{Links.map((link, index) => (
					<TopHeaderLink key={index} link={link.link} title={link.title} />
				))}
			</TopHeader>
			{children}
			<TopFooter />
			<TopBackground />
		</>
	);
};
