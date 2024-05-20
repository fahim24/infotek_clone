"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const brands = [
	{ id: 1, imgSrc: "/assets/img/brand.png" },
	{ id: 2, imgSrc: "/assets/img/brand.png" },
	{ id: 3, imgSrc: "/assets/img/brand.png" },
	{ id: 4, imgSrc: "/assets/img/brand.png" },
	{ id: 5, imgSrc: "/assets/img/brand.png" },
	{ id: 6, imgSrc: "/assets/img/brand.png" },
	{ id: 7, imgSrc: "/assets/img/brand.png" },
	{ id: 8, imgSrc: "/assets/img/brand.png" },
	{ id: 9, imgSrc: "/assets/img/brand.png" },
	{ id: 10, imgSrc: "/assets/img/brand.png" },
];

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	// slidesPerView: 5,
	spaceBetween: 30,
	speed: 1300,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},

	breakpoints: {
		1199: {
			slidesPerView: 5,
		},
		991: {
			slidesPerView: 4,
		},
		767: {
			slidesPerView: 3,
		},
		575: {
			slidesPerView: 2,
		},
		0: {
			slidesPerView: 1,
		},
	},
};
export default function BrandSlider1() {
	return (
		<>
			<div className="swiper brand-slider">
				<Swiper {...swiperOptions} className="swiper-wrapper">
					{brands.map((brand) => (
						<SwiperSlide key={brand.id}>
							<div className="brand-image">
								<img src={brand.imgSrc} alt="brand-img" />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
}
