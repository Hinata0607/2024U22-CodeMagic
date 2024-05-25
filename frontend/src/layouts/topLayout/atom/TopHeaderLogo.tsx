import Image from 'next/image';
import Link from 'next/link';

export const TopHeaderLogo = () => {
	return (
		<Link
			href="/"
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Image
				src="/CodeMagic01_White.svg"
				alt="logo"
				width={180}
				height={50}
				objectFit="cover"
			/>
		</Link>
	);
};
