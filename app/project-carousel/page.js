import Layout from "@/components/layout/Layout";
import Brand1 from "@/components/sections/Brand1";
import ProjectSlider2 from "@/components/slider/ProjectSlider2";
export default function ProjectCarousel() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Project Carousel">
				<section className="project-section section-padding fix">
					<div className="container">
						<div className="project-wrapper ms-0">
							<ProjectSlider2 />
						</div>
					</div>
				</section>
				<Brand1 />
			</Layout>
		</>
	);
}
