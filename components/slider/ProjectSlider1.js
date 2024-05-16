"use client";
import ImageWithFallback from "@/components/ImageOrFallback";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const projects = [
	{
		id: 1,
		img: "/assets/img/project/01.jpg",
		projectType: "Technology",
		projectName: "Platform Integration",
	},
	{
		id: 2,
		img: "/assets/img/project/02.jpg",
		projectType: "Security",
		projectName: "Network Security",
	},
	{
		id: 3,
		img: "/assets/img/project/03.jpg",
		projectType: "Solution",
		projectName: "Web Development",
	},
	{
		id: 4,
		img: "/assets/img/project/04.jpg",
		projectType: "Technology",
		projectName: "IT Management",
	},
	{
		id: 5,
		img: "/assets/img/project/03.jpg",
		projectType: "Solution",
		projectName: "Web Development",
	},
	{
		id: 6,
		img: "/assets/img/project/04.jpg",
		projectType: "Technology",
		projectName: "IT Management",
	},
];

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	spaceBetween: 30,
	speed: 1500,
	loop: true,
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".dot-3",
		clickable: true,
	},
	breakpoints: {
		1199: {
			slidesPerView: 4,
		},
		991: {
			slidesPerView: 3,
		},
		767: {
			slidesPerView: 2,
		},
		650: {
			slidesPerView: 2,
		},

		575: {
			slidesPerView: 1,
		},

		0: {
			slidesPerView: 1,
		},
	},
};
export default function ProjectSlider1({ showDots }) {
	return (
		<>
			<div className="swiper project-slider pt-5">
				<Swiper {...swiperOptions} className="swiper-wrapper">
					{projects.map((project) => (
						<SwiperSlide key={project.id}>
							<div className="project-items">
								<div className="project-image" style={{ width: "318px", height: "457px" }}>
									<ImageWithFallback
										fallbackSrc={"/assets/img/logo/black-logo.svg"}
										src={project.img}
										alt={"project image"}
									/>
									<div className="project-content">
										<p>{project.projectType}</p>
										<h4>
											<Link href="/project-details">{project.projectName}</Link>
										</h4>
										<Link href="/project-details" className="icon">
											<i className="fa-solid fa-arrow-right" />
										</Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				{showDots && (
					<div className="swiper-dot-2">
						<div className="dot-3" />
					</div>
				)}
			</div>
		</>
	);
}
