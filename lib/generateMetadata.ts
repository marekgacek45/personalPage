import { Metadata } from 'next'

export const generateMetadata = ({
	title = 'Marek Gacek - Programista FullStack | Strony internetowe',
	description = 'Jestem Marek Gacek, programista FullStack, który tworzy nowoczesne strony internetowe. Oferuję kompleksowe usługi w zakresie projektowania i rozwoju aplikacji internetowych.',
	path = '/',
}: {
	title?: string
	description?: string
	path?: string
}): Metadata => {
	const metadataBase = new URL('https://marekgacekdev.pl')
	const fullPath = path === '/' ? metadataBase.href : new URL(path, metadataBase).href

	return {
		metadataBase,
		title: {
			default: title,
			template: `%s | Marek Gacek - Programista FullStack`,
		},
		description,
		generator: 'Next.js',
		applicationName: 'Marek Gacek - Programista FullStack | Strony internetowe',
		referrer: 'origin-when-cross-origin',
		keywords: [
			'programista FullStack',
			'tworzenie stron internetowych',
			'JavaScript',
			'Next.js',
			'aplikacje webowe',
			'projektowanie stron',
			'strony internetowe na zamówienie',
			'rozwój aplikacji internetowych',
			'front-end development',
			'backend development',
		],
		authors: { name: 'Marek Gacek', url: 'https://marekgacekdev.pl' },
		creator: 'Marek Gacek',
		publisher: 'Marek Gacek',
		alternates: {
			canonical: fullPath,
		},
		openGraph: {
			title,
			description,
			type: 'website',
			locale: 'pl_PL',
			url: fullPath,
			siteName: 'Marek Gacek Blog - FullStack Developer',
		},
	}
}
