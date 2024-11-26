import { Metadata } from "next";

export const metadata:Metadata = {
	title: 'About Page',
	description: 'About Page',
	keywords: ['juan carlos','Fernando', 'informacion','...']
};


export default function AboutPage() {
	return  (
		<main>
			<span className="text-xl text-center">About Page</span>
		</main>
	)
}