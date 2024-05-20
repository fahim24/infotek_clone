"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const brands = [
	{ id: 1, imgSrc: "/assets/img/brand/01.png" },
	{ id: 2, imgSrc: "/assets/img/brand/02.png" },
	{ id: 3, imgSrc: "/assets/img/brand/03.png" },
	{ id: 4, imgSrc: "/assets/img/brand/04.png" },
	{ id: 5, imgSrc: "/assets/img/brand/01.png" },
	{ id: 6, imgSrc: "/assets/img/brand/01.png" },
	{ id: 7, imgSrc: "/assets/img/brand/02.png" },
	{ id: 8, imgSrc: "/assets/img/brand/03.png" },
	{ id: 9, imgSrc: "/assets/img/brand/04.png" },
	{ id: 10, imgSrc: "/assets/img/brand/01.png" },
];

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
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
export default function BrandSlider2() {
	return (
		<>
			<div className="swiper brand-slider-2">
				<Swiper {...swiperOptions} className="swiper-wrapper">
					{brands.map((brand) => (
						<SwiperSlide key={brand.id}>
							<div className="brand-img">
								<img src={brand.imgSrc} alt="img" />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
}
