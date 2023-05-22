import Image from 'next/image';
import Link from 'next/link';

// import {
// 	FaceSmileIcon,
// 	ArrowRightIcon,
// 	SparklesIcon,
// } from '@heroicons/react/24/outline';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { horizontalLoop } from '../utils/loop';

export default function HOME() {
	const documentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			horizontalLoop('[data-loop-text]', {
				repeat: -1,
			});

			gsap.to('[data-rotate]', {
				rotate: -360,
				repeat: -1,
				duration: 5,
				ease: 'none',
			});
		}, documentRef);

		return () => ctx.revert();
	}, []);

	return (
		<div className="h-screen mx-auto font-mono bg-white" ref={documentRef}>
			<div className="flex items-center mx-5 h-14">
				<span className=" text-xl font-bold md:2xl">SHRIMPSSS</span>

				<ul className="hidden md:flex">
					<li className="mx-5">HOME</li>
					<li className="mx-5">
						BLOG
						{/* <Link href="/blog"> BLOG </Link> */}
					</li>
					<li className="mx-5">
						ABOUT
						{/* <Link href="/blog"> ABOUT </Link> */}
					</li>
				</ul>

				<button className="px-3 py-1 ml-auto text-sm font-light text-white bg-black rounded-full">
					Find Me
				</button>
			</div>

			<div className="flex items-center py-5 justify-around px-5 font-serif font-black leading-tight border-t border-b border-black text-3xl md:text-6xl lg:text-8xl 2xl:leading-relaxed">
				<div className="flex-1">
					<h1>Shrimpsss</h1>
					<h1>Develop Blog</h1>
				</div>

				<div className="flex-1 flex justify-center">
					<Image
						src="/happy-coding/surfing.svg"
						alt="a man is surfing"
						width={500}
						height={500}
					></Image>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px]  border-b border-black bg-black ">
				{/* First */}
				<div className="relative p-5 overflow-hidden bg-white">
					<div className="text-lg md:text-2xl w-full sm:w-[300px] leading-7">
						{/* docs */}
						<div className=" z-40 relative bg-white">
							<div className="text-2xl mb-2">
								<h1>Front-End & Buidler </h1>
							</div>
							<div className="text-lg text-gray-400">
								"Do not quench your inspiration and imagination;
								do not become the slave of your model."
							</div>

							<div className="border-t-2 text-base mt-3 mb-1 border-gray-100">
								{/* You can fine me in these places */}
							</div>
							{/* Other Card */}
							<div className="text-lg md:text-2xl flex justify-between">
								<Link
									href="https://github.com/Code-Shrimpsss"
									target="_blank"
									className="flex items-center m-2 hover:bg-gray-200 p-2 rounded-full"
									about="github"
								>
									<Image
										src="/icon_svgs/github.svg"
										alt="github"
										width={28}
										height={28}
										about="github"
									></Image>
								</Link>

								<Link
									href="https://juejin.cn/user/783303009380040"
									target="_blank"
									className="flex items-center m-2 hover:bg-gray-200 p-2 rounded-full"
								>
									<Image
										src="/icon_svgs/juejin.svg"
										alt="juejin"
										width={28}
										height={28}
										about="juejin"
									></Image>
								</Link>

								<Link
									href="email:w9783094562@gmail.com"
									target="_blank"
									className="flex items-center m-2 hover:bg-gray-200 p-2 rounded-full"
									about="email"
								>
									<Image
										src="/icon_svgs/email.svg"
										alt="email"
										width={28}
										height={28}
										about="email"
									></Image>
								</Link>

								<Link
									href="https://code-shrimpsss.github.io/"
									target="_blank"
									className="flex items-center m-2 hover:bg-gray-200 p-2 rounded-full"
								>
									<Image
										src="/icon_svgs/blog.svg"
										alt="blog"
										width={28}
										height={28}
										about="blog"
									></Image>
								</Link>

								<Link
									href="https://github.com/Code-Shrimpsss"
									target="_blank"
									className="flex items-center m-2 hover:bg-gray-200 p-2 rounded-full"
								>
									<Image
										src="/icon_svgs/book.svg"
										alt="book"
										width={28}
										height={28}
										about="book"
									></Image>
								</Link>
							</div>
						</div>

						{/* clicle */}
						<div
							className=" hidden sm:block absolute right-0 translate-x-1/2 -translate-y-1/2 top-1/2"
							data-rotate
						>
							<div
								className="bg-no-repeat scale-75 w-[439px] h-[439px]"
								style={{
									backgroundImage:
										'url(/happy-coding/build-your-site.svg)',
								}}
							></div>
						</div>
					</div>
				</div>
				{/* Second */}
				<div className="relative p-5 overflow-hidden bg-white ">
					<div className="text-2xl">
						You can fine me in these places
					</div>

					{/* <div className="text-lg md:text-2xl w-[200px] md:w-[300px] leading-7"> */}
					<div className="text-lg md:text-2xl leading-7 m-4">
						<ul className="tab_top">
							<li className="bg-yellow-100">JavaScript</li>
							<li className="bg-blue-300">React</li>
							<li className="bg-blue-200">Typescript</li>
							<li className="bg-blue-100">WebPack</li>
							<li className="bg-green-100">Vue</li>
							<li className="bg-purple-200">Vite</li>
							<li className="bg-green-200">Node</li>
							<li className="bg-red-300">Express</li>
							<li className="bg-gray-100">Solidity</li>
							<li className="bg-gray-200">Next</li>
							<li className="bg-blue-200">Python</li>
						</ul>
					</div>
				</div>
				{/* Third */}
				<div className="flex items-center justify-center p-10 bg-white">
					<Image
						src="/commom/logo-b.svg"
						alt="a man is surfing"
						width={300}
						height={300}
					></Image>
				</div>
			</div>
			{/* footer */}
			<div className="flex w-full py-2 2xl:p-10 overflow-hidden font-mono  text-2xl 2xl:text-8xl  md:text-6xl font-bold whitespace-nowrap">
				{new Array(6).fill(0).map((_, index) => {
					return (
						<div key={index} data-loop-text>
							<span className="text-stroke text-white">
								SHRIMPSSS <span className="mx-5"></span>
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}
