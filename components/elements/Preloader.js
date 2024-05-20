export default function Preloader() {
	const name = "infotek";
	return (
		<>
			<div id="preloader" className="preloader">
				<div className="animation-preloader">
					<div className="spinner"></div>
					<div className="txt-loading">
						{name
							.toUpperCase()
							.split("")
							.map((char) => (
								<span key={char} data-text-preloader={char} className="letters-loading">
									{char}{" "}
								</span>
							))}
					</div>
					<p className="text-center">Loading</p>
				</div>
				<div className="loader">
					<div className="row">
						<div className="col-3 loader-section section-left">
							<div className="bg" />
						</div>
						<div className="col-3 loader-section section-left">
							<div className="bg" />
						</div>
						<div className="col-3 loader-section section-right">
							<div className="bg" />
						</div>
						<div className="col-3 loader-section section-right">
							<div className="bg" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
