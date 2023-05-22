import { Transition } from '@headlessui/react';
import { Fragment } from 'react';
import LoadingRainbow from './loadingRainbow';

export default function Loading({ loading }: { loading: boolean }) {
	return (
		<Transition
			show={loading}
			as={Fragment}
			enter="transition ease-in-out duration-300 transform"
			enterFrom="-translate-y-full"
			enterTo="translate-y-0"
			leave="transition ease-in-out duration-300 transform"
			leaveFrom="translate-y-0"
			leaveTo="-translate-y-full"
		>
			<div className="z-[9999] w-full h-screen bg-white">
				<div className=" top-0 m-auto h-2 text-center">
					<LoadingRainbow />
					{/* <div className="animate-pulse pt-[80px] text-2xl">
						Loading...
					</div> */}
				</div>
			</div>
		</Transition>
	);
}
