"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
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
};

const testimonials = [
	{
		id: 1,
		msg: "Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.	Aliquam pellentesque nisi dui eget dapibus enim ornare eu. Morbi nunc metus, 	maximus eu mauris.",
		name: "Kathryn Murphy",
		profession: "Web Designer",
	},
	{
		id: 2,
		msg: "Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.	Aliquam pellentesque nisi dui eget dapibus enim ornare eu. Morbi nunc metus, 	maximus eu mauris.",
		name: "Kathryn Murphy",
		profession: "Web Designer",
	},
	{
		id: 3,
		msg: "Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.	Aliquam pellentesque nisi dui eget dapibus enim ornare eu. Morbi nunc metus, 	maximus eu mauris.",
		name: "Kathryn Murphy",
		profession: "Web Designer",
	},
	{
		id: 4,
		msg: "Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.	Aliquam pellentesque nisi dui eget dapibus enim ornare eu. Morbi nunc metus, 	maximus eu mauris.",
		name: "Kathryn Murphy",
		profession: "Web Designer",
	},
];

export default function Testimonial1() {
	return (
		<>
			<section className="testimonial-section section-padding fix">
				<div className="container">
					<div className="testimonial-wrapper">
						<div className="swiper testimonial-slider">
							<Swiper {...swiperOptions} className="swiper-wrapper">
								{/* <SwiperSlide>
									<div style={{ display: "grid", placeItems: "center" }}>
										<TwitterTimelineEmbed
											sourceType="url"
											url="https://x.com/M4YOURSIT"
											// screenName="
											// M4YOURSIT
											// "
											options={{ height: 400 }}
										/>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div style={{ display: "grid", placeItems: "center" }}>
										<TwitterTweetEmbed tweetId="1584963010170347520" options={{ theme: "light" }} />
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div style={{ display: "grid", placeItems: "center" }}>
										<TwitterTweetEmbed tweetId="1785353601323585912" options={{ theme: "light" }} />
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div style={{ display: "grid", placeItems: "center" }}>
										<TwitterTweetEmbed tweetId="1748062941008822503" options={{ theme: "light" }} />
									</div>
								</SwiperSlide> */}
								{testimonials.map((testimonial) => (
									<SwiperSlide key={testimonial.id}>
										<div className="testimonial-items">
											<div
												className="tesimonial-image bg-cover"
												style={{ backgroundImage: 'url("assets/img/testimonial/01.jpg")' }}>
												<div className="star">
													<i className="fas fa-star" />
													<i className="fas fa-star" />
													<i className="fas fa-star" />
													<i className="fas fa-star" />
													<i className="fas fa-star" />
												</div>
											</div>
											<div className="testimonial-content">
												<div className="section-title">
													<span>Testimonials</span>
													<h2>What’s Clients Say </h2>
												</div>
												<p className="mt-3 mt-md-0">{testimonial.msg}</p>
												<div className="author-details">
													<h5>{testimonial.name}</h5>
													<span>{testimonial.profession}</span>
												</div>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
						<div className="swiper-dot-2">
							<div className="dot-2" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
