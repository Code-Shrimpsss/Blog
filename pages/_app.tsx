import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from '../seo/next-seo.json';
import TITLE from '../seo/title.json';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loading from '../shared/loading';

// undebugger
import '../utils/unDebugger';

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const currentTitle = TITLE.find((item) => item.path == router.pathname) || {
		path: '/',
		title: SEO.title,
	};

	const seo = { ...SEO, titleTemplate: currentTitle.title };

	useEffect(() => {
		const handleChangeStart = (url: string) => setLoading(true);
		const handleChangeComplete = (url: string) => setLoading(false);

		router.events.on('routeChangeStart', handleChangeStart);
		router.events.on('routeChangeComplete', handleChangeComplete);
		router.events.on('routeChangeError', handleChangeComplete);

		return () => {
			router.events.off('routeChangeStart', handleChangeStart);
			router.events.off('routeChangeComplete', handleChangeComplete);
			router.events.off('routeChangeError', handleChangeComplete);
		};
	}, [router]);

	return (
		<>
			<DefaultSeo {...seo} />
			<Loading loading={loading} />
			{!loading && <Component {...pageProps} />}
		</>
	);
}
