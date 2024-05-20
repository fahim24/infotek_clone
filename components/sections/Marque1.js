export default function Marque1() {
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
			<div className="marque-section">
				<div className="marquee-wrapper text-slider">
					<div className="marquee-inner to-left">
						<ul className="marqee-list d-flex">
							<li className="marquee-item">
								{services.map((service) => (
									<>
										<span className="text-slider">{service.name}</span>
										<span className="text-slider">
											<img src="/assets/img/star.svg" alt="img" />
										</span>
									</>
								))}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
