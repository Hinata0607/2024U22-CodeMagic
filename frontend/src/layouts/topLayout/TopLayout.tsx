'use client';
import { TopHeader } from './block';
import { TopHeaderLink } from './atom';
import { TopLayoutProps } from '@/types';

const Links = [
	{link: "info", title: "お知らせ"},
	{link: "intro", title: "ゲーム紹介"},
	{link: "login", title: "ログイン"},
]

export const TopLayout = ({ children }: TopLayoutProps) => {
	return (
		<>
			<TopHeader>
				{
					Links.map((link, index) => (
						<TopHeaderLink key={index} link={link.link} title={link.title} />
					))
				}
			</TopHeader>
			{children}
		</>
	);
};
