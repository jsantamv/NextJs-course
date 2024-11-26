import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'SEO Contact Page',
	description: 'SEO description Contact page',
	keywords: 'SEO keywords Contact page',
	openGraph: {
		title: 'OG: Contact Page',
		description: 'OG: description Contact page',
		images: '/og-image.png',
	}

};

export default function ContactPage() {
	return (
		<>
			<h3 className="text-7xl text-center">contact</h3>
		</>
	)
}