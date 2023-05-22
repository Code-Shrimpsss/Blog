import loader from './styles/rainbow.module.css';

export default function LoadingRainbow() {
	return (
		<>
			<div className={loader.loader}>
				<div className={loader.loader_inner}>
					<div className={loader.loader_line_wrap}>
						<div className={loader.loader_line}></div>
					</div>
					<div className={loader.loader_line_wrap}>
						<div className={loader.loader_line}></div>
					</div>
					<div className={loader.loader_line_wrap}>
						<div className={loader.loader_line}></div>
					</div>
					<div className={loader.loader_line_wrap}>
						<div className={loader.loader_line}></div>
					</div>
					<div className={loader.loader_line_wrap}>
						<div className={loader.loader_line}></div>
					</div>
				</div>
			</div>
		</>
	);
}
