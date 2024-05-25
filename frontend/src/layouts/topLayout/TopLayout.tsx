'use client';
import { ReactNode } from 'react';
import { TopHeader } from './block';

interface TopLayoutProps {
	children: ReactNode;
}

export const TopLayout = ({ children }: TopLayoutProps) => {
	return (
		<>
			<TopHeader />
			{children}
		</>
	);
};
