import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Project() {
	const projects = [
		{ imgSrc: "/assets/img/project/01.jpg", tag: "Technology", name: "Platform Integration" },
		{ imgSrc: "/assets/img/project/02.jpg", tag: "Security", name: "Network Security" },
		{ imgSrc: "/assets/img/project/03.jpg", tag: "Solution", name: "Web Development" },
		{ imgSrc: "/assets/img/project/04.jpg", tag: "Technology", name: "IT Management" },
		{ imgSrc: "/assets/img/project/10.jpg", tag: "Technology", name: "Design Solutions" },
		{ imgSrc: "/assets/img/project/11.jpg", tag: "Technology", name: "Software Development" },
	];
	return (
		<>
			<Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Project">
				<section className="project-section section-padding fix">
					<div className="container">
						<div className="row g-4">
							{projects.map((project, idx) => (
								<div
									key={idx}
									className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
									data-wow-delay={`.${3 + idx * 2}s`}>
									<div className="project-items">
										<div className="project-image">
											<img src={project.imgSrc} alt="project-img" />
											<div className="project-content">
												<p>{project.tag}</p>
												<h4>
													<Link href="/project-details">{project.name}</Link>
												</h4>
											</div>
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
