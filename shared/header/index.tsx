export default function Header() {
	return (
		<div className="flex mx-5 items-center mx-auto h-14">
			<span className=" text-xl font-bold md:2xl">SHRIMPSSS</span>

			<ul className="hidden md:flex">
				<li className="mx-5">HOME</li>
				<li className="mx-5">WORKS</li>
				<li className="mx-5">ABOUT</li>
			</ul>

			<button className="px-3 py-1 ml-auto text-sm font-light text-white bg-black rounded-full">
				contact
			</button>
		</div>
	);
}
