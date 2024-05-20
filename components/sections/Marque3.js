export default function Marque3() {
	const services = [
		{
			id: 1,
			name: "Business",
		},
		{
			id: 2,
			name: "IT Solution",
		},
		{
			id: 3,
			name: "Work Process",
		},
		{
			id: 4,
			name: "Technology",
		},
		{
			id: 5,
			name: "Business",
		},
		{
			id: 6,
			name: "IT Solution",
		},
		{
			id: 7,
			name: "Work Process",
		},
		{
			id: 8,
			name: "Technology",
		},
		{
			id: 9,
			name: "Business",
		},
		{
			id: 10,
			name: "IT Solution",
		},
		{
			id: 11,
			name: "Work Process",
		},
		{
			id: 12,
			name: "Technology",
		},
	];

	return (
		<>
			<div className="marque-section-2 section-padding pt-0">
				<div className="container-fluid">
					<div className="marquee-wrapper style-2 text-slider">
						<div className="marquee-inner to-left">
							<ul className="marqee-list d-flex">
								<li className="marquee-item style-2">
									{services.map((service) => (
										<>
											<span className="text-slider">
												<img src="/assets/img/asterisk.svg" alt="img" />
											</span>
											<span className="text-slider text-style">{service.name}</span>
										</>
									))}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
