"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
		el: ".dot-2",
		clickable: true,
	},
	breakpoints: {
		1199: {
			slidesPerView: 4,
		},
		991: {
			slidesPerView: 2,
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

const projects = [
	{
		id: 1,
		img: "/assets/img/project/08.jpg",
		projectType: "Technology",
		projectName: "Software Development",
	},
	{
		id: 2,
		img: "/assets/img/project/09.jpg",
		projectType: "Technology",
		projectName: "Analytic Solutions",
	},
	{
		id: 3,
		img: "/assets/img/project/10.jpg",
		projectType: "Technology",
		projectName: "Design Solutions",
	},
	{
		id: 4,
		img: "/assets/img/project/11.jpg",
		projectType: "Technology",
		projectName: "Software Development",
	},
	{
		id: 5,
		img: "/assets/img/project/11.jpg",
		projectType: "Technology",
		projectName: "Software Development",
	},
];

export default function ProjectSlider3() {
	return (
		<>
			<div className="swiper project-slider-3">
				<Swiper {...swiperOptions} className="swiper-wrapper">
					{projects.map((project) => (
						<SwiperSlide key={project.id}>
							<div className="project-items style-2">
								<div className="project-image">
									<img src={project.img} alt="project-img" />
									<div className="project-content">
										<p>{project.projectType}</p>
										<h4>
											<Link href="/project-details">{project.projectName}</Link>
										</h4>
										<Link href="/project-details" className="arrow-icon-2">
											<i className="fa-solid fa-arrow-right" />
										</Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
}
