"use client";
import ImageWithFallback from "@/components/ImageOrFallback";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slugify from "slugify";

const services = [
	{
		id: 1,
		img: "/assets/img/service/icon/s-icon-1.svg",
		title: "Database Security",
		description: "Mauris ultrices ligula eget volutpat aliquet nullam",
	},
	{
		id: 2,
		img: "/assets/img/service/icon/s-icon-2.svg",
		title: "IT Consultancy",
		description: "Mauris ultrices ligula eget volutpat aliquet nullam",
	},
	{
		id: 3,
		img: "/assets/img/service/icon/s-icon-3.svg",
		title: "Cyber Security",
		description: "Mauris ultrices ligula eget volutpat aliquet nullam",
	},
	{
		id: 4,
		img: "/assets/img/service/icon/s-icon-4.svg",
		title: "App Development",
		description: "Mauris ultrices ligula eget volutpat aliquet nullam",
	},
	{
		id: 5,
		img: "/assets/img/service/icon/s-icon-1.svg",
		title: "Database Security",
		description: "Mauris ultrices ligula eget volutpat aliquet nullam",
	},
	{
		id: 6,
		img: "/assets/img/service/icon/s-icon-2.svg",
		title: "IT Consultancy",
		description: "Mauris ultrices ligula eget volutpat aliquet nullam",
	},
	{
		id: 7,
		img: "/assets/img/service/icon/s-icon-3.svg",
		title: "Cyber Security",
		description: "Mauris ultrices ligula eget volutpat aliquet nullam",
	},
	{
		id: 8,
		img: "/assets/img/service/icon/s-icon-4.svg",
		title: "App Development",
		description: "Mauris ultrices ligula eget volutpat aliquet nullam",
	},
	{
		id: 9,
		img: "/assets/img/service/icon/s-icon-1.svg",
		title: "Database Security",
		description: "Mauris ultrices ligula eget volutpat aliquet nullam",
	},
	{
		id: 10,
		img: "/assets/img/service/icon/s-icon-2.svg",
		title: "IT Consultancy",
		description: "Mauris ultrices ligula eget volutpat aliquet nullam",
	},
	{
		id: 11,
		img: "/assets/img/service/icon/s-icon-3.svg",
		title: "Cyber Security",
		description: "Mauris ultrices ligula eget volutpat aliquet nullam",
	},
	{
		id: 12,
		img: "/assets/img/service/icon/s-icon-4.svg",
		title: "App Development",
		description: "Mauris ultrices ligula eget volutpat aliquet nullam",
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
	navigation: {
		nextEl: ".array-prev",
		prevEl: ".array-next",
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

export default function Service1() {
	return (
		<>
			<section
				className="service-section fix section-padding bg-cover"
				style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")' }}
				id="service">
				<div className="container">
					<div className="section-title-area">
						<div className="section-title">
							<span className="wow fadeInUp">IT services</span>
							<h2 className="wow fadeInUp" data-wow-delay=".3s">
								We Solve IT Problems <br /> With Technology
							</h2>
						</div>
						<div className="array-button">
							<button className="array-prev">
								<i className="fal fa-arrow-right" />
							</button>
							<button className="array-next">
								<i className="fal fa-arrow-left" />
							</button>
						</div>
					</div>
					<div className="service-wrapper">
						<div className="swiper service-slider">
							<Swiper {...swiperOptions} className="swiper-wrapper">
								{services.map((service) => (
									<SwiperSlide key={service.id}>
										<div className="service-box-items">
											<div className="icon" style={{ width: "70px", height: "70px" }}>
												<ImageWithFallback
													fallbackSrc={"/assets/img/logo/black-logo.svg"}
													src={service.img}
													alt={"service icon"}
												/>
											</div>
											<div className="content">
												<h4>
													<Link href={`/service-details/${slugify(service.title)}`}>
														{service.title}
													</Link>
												</h4>
												<p>{service.description}</p>
												<Link
													href={`/service-details/${slugify(service.title)}`}
													className="theme-btn-2 mt-3">
													read More
													<i className="fa-solid fa-arrow-right-long" />
												</Link>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
						<div className="service-text wow fadeInUp" data-wow-delay=".4s">
							<h6>
								Need Any Kind Of IT Solution For Your Business.{" "}
								<Link href="/service">View Services </Link>
							</h6>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
