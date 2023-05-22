import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from '../seo/next-seo.json';
import TITLE from '../seo/title.json';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const currentTitle = TITLE.find((item) => item.path == router.pathname) || {
		path: '/',
		title: SEO.title,
	};

	const seo = { ...SEO, titleTemplate: currentTitle.title };

	return (
		<>
			<DefaultSeo {...seo} />

			<Component {...pageProps} />
		</>
	);
}
