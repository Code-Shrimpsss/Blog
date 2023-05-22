import { NextPage } from 'next';
import { useRouter } from 'next/router';

const NotFoundPage: NextPage = () => {
	const router = useRouter();
	return (
		<section className="relative h-[26rem] w-full">
			<div
				className=" absolute left-[50%] z-[100] mx-auto  grid h-[30rem] w-[30rem] translate-x-[-50%] cursor-pointer place-content-center rounded-full bg-white px-4 shadow-common shadow-red-400 hover:shadow-none"
				onClick={() => router.push('/')}
			>
				BACK HOME
			</div>
		</section>
	);
};

export default NotFoundPage;
