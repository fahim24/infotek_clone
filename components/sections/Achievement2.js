import CounterUp from "../elements/CounterUp";

export default function Achievement2() {
	const achievements = [
		{
			name: "Satisfied Clients",
			imgSrc: "/assets/img/achievement-icon/01.svg",
			value: 6561,
		},
		{
			name: "Finished Projects",
			imgSrc: "/assets/img/achievement-icon/02.svg",
			value: 600,
		},
		{
			name: "Skilled Experts",
			imgSrc: "/assets/img/achievement-icon/03.svg",
			value: 250,
		},
		{
			name: "Media Posts",
			imgSrc: "/assets/img/achievement-icon/04.svg",
			value: 590,
		},
	];

	return (
		<>
			<section className="achievement-section-2 fix section-bg-2">
				<div className="container">
					<div className="achievement-wrapper style-2">
						<div className="section-title mb-0">
							<span className="text-white wow fadeInUp">achievement</span>
							<h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
								We Are Increasing <br /> Business Success
							</h2>
						</div>
						<div className="counter-area">
							{achievements.map((achievement, idx) => (
								<div
									key={idx}
									className="counter-items wow fadeInUp"
									data-wow-delay={`.${3 + idx * 2}s`}>
									<div className="icon">
										<img src={achievement.imgSrc} alt="icon-img" />
									</div>
									<div className="content">
										<h2>
											<CounterUp count={achievement.value} />+
										</h2>
										<p>{achievement.name}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
