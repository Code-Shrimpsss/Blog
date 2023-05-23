import Image from 'next/image';
import Link from 'next/link';

export default function LinkCard() {
	return (
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
	);
}
