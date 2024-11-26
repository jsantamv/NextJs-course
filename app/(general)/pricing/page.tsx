import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'SEO Title',
	description: 'SEO Title',
	keywords: ['SEO Title'],
	openGraph: {
		title: 'SEO Title',
		description: 'SEO Title',
		url: 'XXXXXXXXXXXXXXXXXXX',
		siteName: 'SEO Title',
		images: [
			{
				url: 'https://www.example.ie/og-image-01.jpg',
				width: 800,
				height: 600,
			},
			{
				url: 'https://www.example.ie/og-image-02.jpg',
				width: 900,
				height: 800,
				alt: 'Og Image Alt',
			},
			{ url: 'https://www.example.ie/og-image-03.jpg' },
			{ url: 'https://www.example.ie/og-image-04.jpg' },
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'SEO Title',
		description: 'SEO Title',
		creator: '@arafat',
		images: ['https://www.example.ie/og-image-01.jpg', 'https://www.example.ie/og-image-02.jpg'],
	},
};

export default function PricingPage() {
	return (
		<>
			<div className="text-center p-2 m-2 text-xl">
				<h2>pricing page</h2>
			</div>
		</>
	)
}