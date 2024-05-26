import { ReactNode } from 'react';

export interface TopLayoutProps {
	children: ReactNode;
}

export interface TopHeaderProps {
	children: ReactNode;
}

export interface TopHeaderLinkProps {
	link: string;
	title: string;
}

export interface TopGameStartButtonProps {
	isFix?: boolean;
}
