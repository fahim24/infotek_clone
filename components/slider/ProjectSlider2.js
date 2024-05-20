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
	navigation: {
		nextEl: ".array-prev",
		prevEl: ".array-next",
	},
	breakpoints: {
		1199: {
			slidesPerView: 3,
		},
		991: {
			slidesPerView: 2,
		},
		767: {
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
		img: "/assets/img/project/05.jpg",
		projectType: "Technology",
		projectName: "Software Development",
	},
	{
		id: 2,
		img: "/assets/img/project/06.jpg",
		projectType: "Technology",
		projectName: "Analytic Solutions",
	},
	{
		id: 3,
		img: "/assets/img/project/07.jpg",
		projectType: "Solutions",
		projectName: "Design Solutions",
	},
	{
		id: 4,
		img: "/assets/img/project/07.jpg",
		projectType: "Solutions",
		projectName: "Design Solutions",
	},
	{
		id: 5,
		img: "/assets/img/project/07.jpg",
		projectType: "Solutions",
		projectName: "Design Solutions",
	},
];

export default function ProjectSlider2({ showDots }) {
	return (
		<>
			<div className="swiper project-slider-2">
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
										<Link href="/project-details" className="arrow-icon">
											<i className="fa-solid fa-arrow-right" />
										</Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{showDots && (
				<div className="swiper-dot-2">
					<div className="dot-2" />
				</div>
			)}
		</>
	);
}
