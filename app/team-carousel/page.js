"use client";
import Layout from "@/components/layout/Layout";
import Brand1 from "@/components/sections/Brand1";
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
		575: {
			slidesPerView: 2,
		},
		0: {
			slidesPerView: 1,
		},
	},
};
const members = [
	{
		imgSrc: "/assets/img/team/04.jpg",
		name: "Marvin McKinney",
		designation: "Web Designer",
	},
	{
		imgSrc: "/assets/img/team/05.jpg",
		name: "Marvin McKinney",
		designation: "Web Designer",
	},
	{
		imgSrc: "/assets/img/team/06.jpg",
		name: "Marvin McKinney",
		designation: "Web Designer",
	},
	{
		imgSrc: "/assets/img/team/07.jpg",
		name: "Marvin McKinney",
		designation: "Web Designer",
	},
	{
		imgSrc: "/assets/img/team/03.jpg",
		name: "Marvin McKinney",
		designation: "Web Designer",
	},
];
export default function TeamCarousel() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Team">
				<section className="team-section-4 fix section-padding">
					<div className="container">
						<div className="swiper team-slider">
							<Swiper {...swiperOptions} className="swiper-wrapper">
								{members.map((member, idx) => (
									<SwiperSlide key={idx}>
										<div className="single-team-items mt-0">
											<div className="team-image">
												<img src={member.imgSrc} alt="team-img" />
												<div className="social-profile">
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
													<span className="plus-btn">
														<i className="fas fa-share-alt" />
													</span>
												</div>
											</div>
											<div className="team-content text-center">
												<h3>
													<Link href="/team-details">{member.name}</Link>
												</h3>
												<p>{member.designation}</p>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
							<div className="swiper-dot-2">
								<div className="dot-2" />
							</div>
						</div>
					</div>
				</section>
				<Brand1 />
			</Layout>
		</>
	);
}
