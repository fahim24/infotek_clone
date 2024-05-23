"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Team1() {
	const followImageCursor = (event, teamItem) => {
		const contentBox = teamItem.getBoundingClientRect();
		const dx = Math.min(Math.max(event.clientX - contentBox.x, 0), contentBox.width);
		const dy = Math.min(Math.max(event.clientY - contentBox.y, 0), contentBox.height);
		teamItem.children[2].style.transform = `translate(${dx}px, ${dy}px) rotate(0)`;
	};

	useEffect(() => {
		const teamItems = document.querySelectorAll(".team-items");

		const handleMouseMove = (event) => {
			teamItems.forEach((item) => {
				followImageCursor(event, item);
			});
		};

		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	const teams = [
		{
			id: 1,
			title: "Scrum Master",
			name: "Cameron Williamson",
			info: "Integer at sapien nec sapien <br/> sollicitudin ultrices in ut nisl.",
		},
		{
			id: 2,
			title: "Engineering",
			name: "Leslie Alexander",
			info: "Integer at sapien nec sapien <br/> sollicitudin ultrices in ut nisl.",
		},
		{
			id: 3,
			title: "UI/UX Designer",
			name: "Ronald Richards",
			info: "Integer at sapien nec sapien <br/> sollicitudin ultrices in ut nisl.",
		},
		{
			id: 4,
			title: "Web Designer",
			name: "Darrell Steward",
			info: "Integer at sapien nec sapien <br/> sollicitudin ultrices in ut nisl.",
		},
	];
	return (
		<>
			<section className="team-section section-padding pt-0 section-bg-2" id="team">
				<div className="line-shape">
					<img src="/assets/img/team/line-shape.png" alt="shape-img" />
				</div>
				<div className="mask-shape">
					<img src="/assets/img/team/mask-shape.png" alt="shape-img" />
				</div>
				<div className="container">
					<div className="section-title-area">
						<div className="section-title">
							<span className="text-white wow fadeInUp">EXPERT PEOPLE</span>
							<h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
								Dedicated Team Members
							</h2>
						</div>
						<Link href="/team" className="theme-btn hover-white wow fadeInUp" data-wow-delay=".5s">
							All Member
							<i className="fa-solid fa-arrow-right-long" />
						</Link>
					</div>
					<div className="team-wrapper">
						{teams.map((team, idx) => (
							<div
								key={idx}
								className={`team-items bor-bottom wow fadeInUp ${idx == 0 ? "bor-top" : "pt-0"}`}
								data-wow-delay={`.${1 + 2 * team.id}s`}>
								<div className="team-title">
									<span>{team.title}</span>
									<h4>
										<Link href="/team-details">{team.name}</Link>
									</h4>
								</div>
								<p>
									Integer at sapien nec sapien <br /> sollicitudin ultrices in ut nisl.
								</p>
								<div
									className="team-hover d-none d-md-block bg-cover"
									style={{ backgroundImage: 'url("assets/img/team/hover-1.png")' }}
								/>
								<div className="social-profile">
									<ul>
										<li>
											<Link href="#">
												<i className="fab fa-facebook-f" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<i className="fab fa-instagram" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<i className="fab fa-linkedin-in" />
											</Link>
										</li>
									</ul>
									<span className="plus-btn">
										<i className="fa-solid fa-plus" />
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
