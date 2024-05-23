import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Team() {
	const members = [
		{
			imgSrc: "/assets/img/team/01.jpg",
			name: "Marvin McKinney",
			designation: "Web Designer",
		},
		{
			imgSrc: "/assets/img/team/02.jpg",
			name: "Bessie Cooper",
			designation: "President of Sales",
		},
		{
			imgSrc: "/assets/img/team/03.jpg",
			name: "Dianne Russell",
			designation: "Marketing manager",
		},
		{
			imgSrc: "/assets/img/team/11.jpg",
			name: "Leslie Alexander",
			designation: "Software Tester",
		},
		{
			imgSrc: "/assets/img/team/12.jpg",
			name: "Kathryn Murphy",
			designation: "General manager",
		},
		{
			imgSrc: "/assets/img/team/13.jpg",
			name: "Darrell Steward",
			designation: "Medical Assistant",
		},
	];
	return (
		<>
			<Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Team">
				<section className="team-section-4 section-padding">
					<div className="container">
						<div className="row g-4">
							{members.map((member, idx) => (
								<div
									key={idx}
									className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
									data-wow-delay={`.${3 + idx * 2}s`}>
									<div className="team-card-items mt-0">
										<div className="team-image">
											<img src={member.imgSrc} alt="team-img" />
											<div className="social-profile">
												<span className="plus-btn">
													<i className="fas fa-share-alt" />
												</span>
												<ul>
													<li>
														<Link href="#">
															<i className="fab fa-facebook-f" />
														</Link>
													</li>
													<li>
														<Link href="#">
															<i className="fa-brands fa-twitter" />
														</Link>
													</li>
													<li>
														<Link href="#">
															<i className="fab fa-linkedin-in" />
														</Link>
													</li>
												</ul>
											</div>
										</div>
										<div className="team-content text-center">
											<h3>
												<Link href="/team-details">{member.name}</Link>
											</h3>
											<p>{member.designation}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
}
