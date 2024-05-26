import { ReactNode } from 'react';

export interface TopNewsAreaProps {
	children: ReactNode;
}

export interface TopNewsCardProps {
	title: string;
	date: string;
	body: string;
}
