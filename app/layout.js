import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800'],
	style: 'normal',
});

export const metadata = {
	// metadataBase: new URL('/'),
	title: 'Creative With AKM - Home | Web Developer | Dubai | Freelancer | UI/UX Designer | Frontend Developer | NEXT JS | REACT JS',
	description:
		'Welcome to Creative With AKM! Discover the digital artistry of Muhammed Mubashir, a Dubai-based front-end developer and UI/UX designer, crafting websites with React JS, Next JS, and Tailwind CSS that drive user engagement.',
	alternates: {
		canonical: '/',
	},
	openGraph: {
		title: 'Creative With AKM - Home | Web Developer | Dubai | Freelancer | UI/UX Designer | Frontend Developer | NEXT JS | REACT JS',
		description:
			'Welcome to Creative With AKM! Discover the digital artistry of Muhammed Mubashir, a Dubai-based front-end developer and UI/UX designer, crafting websites with React JS, Next JS, and Tailwind CSS that drive user engagement.',
		// images: '/',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
