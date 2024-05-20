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

const services = [
	{
		imgSrc: "/assets/img/service/02.jpg",
		icon: "/assets/img/service/icon/s-icon-1.svg",
		name: "Database Security",
		info: "accumsan. Pellentesque in magna tincidunt, this is.",
	},
	{
		imgSrc: "/assets/img/service/03.jpg",
		icon: "/assets/img/service/icon/s-icon-2.svg",
		name: "IT Consultancy",
		info: "accumsan. Pellentesque in magna tincidunt, this is.",
	},
	{
		imgSrc: "/assets/img/service/04.jpg",
		icon: "/assets/img/service/icon/s-icon-4.svg",
		name: "App Development",
		info: "accumsan. Pellentesque in magna tincidunt, this is.",
	},
	{
		imgSrc: "/assets/img/service/05.jpg",
		icon: "/assets/img/service/icon/s-icon-3.svg",
		name: "Database Security",
		info: "accumsan. Pellentesque in magna tincidunt, this is.",
	},
	{
		imgSrc: "/assets/img/service/02.jpg",
		icon: "/assets/img/service/icon/s-icon-1.svg",
		name: "Database Security",
		info: "accumsan. Pellentesque in magna tincidunt, this is.",
	},
];
export default function ServiceCarousel() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Services">
				<section className="service-section-3 fix section-padding">
					<div className="container">
						<div className="swiper service-slider-2">
							<Swiper {...swiperOptions} className="swiper-wrapper">
								{services.map((service, idx) => (
									<SwiperSlide key={idx}>
										<div className="service-card-items mt-0">
											<div className="service-image">
												<img src={service.imgSrc} alt="service-img" />
											</div>
											<div className="icon-2">
												<img src={service.icon} alt="img" />
											</div>
											<div className="service-content">
												<div className="icon">
													<img src={service.icon} alt="img" />
												</div>
												<h4>
													<Link href="/service-details">{service.name}</Link>
												</h4>
												<p>{service.info}</p>
												<Link href="/service-details" className="theme-btn-2 mt-3">
													read More
													<i className="fa-solid fa-arrow-right-long" />
												</Link>
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
