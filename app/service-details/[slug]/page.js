"use client";
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { notFound } from "next/navigation";
import slugify from "slugify";

const unslugify = (slug) => slug.replace(/\-/g, " ");

export default function ServiceDetailsbyName({ params }) {
	const decodedSlug = params.slug ? unslugify(params.slug) : "";
	const [activeItem, setActiveItem] = useState(1);

	const handleClick = (index) => {
		setActiveItem(index);
	};

	const accordions = [
		{
			id: 1,
			title: "Where should I incorporate my business?",
			info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.",
		},
		{
			id: 2,
			title: "How long should a business plan be?",
			info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.",
		},
		{
			id: 3,
			title: "What is included in your services?",
			info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.",
		},
		{
			id: 4,
			title: "What type of company is measured?",
			info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.",
		},
	];

	const services = [
		"Database Security",
		"IT Consultancy",
		"App Development",
		"UI/UX Design",
		"Cyber Security",
		"Digital Marketing",
		"Data Analysis",
	];

	if (!services.includes(decodedSlug)) {
		notFound();
	}
	return (
		<>
			<Layout headerStyle={1} footerStyle={2} breadcrumbTitle={decodedSlug}>
				<section className="service-details-section fix section-padding">
					<div className="container">
						<div className="service-details-wrapper">
							<div className="row g-4">
								<div className="col-12 col-lg-4 order-2 order-md-1">
									<div className="main-sidebar">
										<div className="single-sidebar-widget">
											<div className="wid-title">
												<h3>All Services</h3>
											</div>
											<div className="widget-categories">
												<ul>
													{services.map((service) => (
														<li key={service} className={service === decodedSlug ? "active" : ""}>
															<Link href={`/service-details/${slugify(service)}`}>{service}</Link>
															<i className="fa-solid fa-arrow-right-long" />
														</li>
													))}
												</ul>
											</div>
										</div>
										<div className="single-sidebar-widget">
											<div className="wid-title">
												<h3>Opening Hours</h3>
											</div>
											<div className="opening-category">
												<ul>
													<li>
														<i className="fa-regular fa-clock" />
														Mon - Sat: 10.00 AM - 4.00 PM
													</li>
													<li>
														<i className="fa-regular fa-clock" />
														Sun: 09.00 AM - 4.00 PM
													</li>
													<li>
														<i className="fa-regular fa-clock" />
														Friday: Closed
													</li>
													<li>
														<i className="fa-regular fa-clock" />
														Emergency: 24 hours
													</li>
												</ul>
											</div>
										</div>
										<div
											className="single-sidebar-image bg-cover"
											style={{ backgroundImage: 'url("assets/img/service/post.jpg")' }}>
											<div className="contact-text">
												<div className="icon">
													<i className="fa-solid fa-phone" />
												</div>
												<h4>Need Help? Call Here</h4>
												<h5>
													<Link href="/tel:+2085550112">+208-555-0112</Link>
												</h5>
											</div>
										</div>
									</div>
								</div>
								<div className="col-12 col-lg-8 order-1 order-md-2">
									<div className="service-details-items">
										<div className="details-image">
											<img src="/assets/img/service/details-1.jpg" alt="img" />
										</div>
										<div className="details-content">
											<h3>{decodedSlug}</h3>
											<p className="mt-3">
												The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend
												porta arcu In hac habitasse the platea thelorem turpoi dictumst. In lacus
												libero faucibus malesuada sagittis placerat eros sed istincidunt augue ac
												ante rutrum sed the is sodales augue consequat.
											</p>
											<p className="mt-3">
												lacus sed pretium pretium justo. Integer is vitae venenatis lorem. Maecenas
												lacinia turpis the in nunc quam hendrerit scelerisque at finibus enim
												sagittis. Aliquam erat is volutpat nam nec purus at is orci volutpat semper
												vel id turpis In a malesuada arcu ac hendrerit.
											</p>
											<div className="details-video-items">
												<div className="video-thumb">
													<img src="/assets/img/service/details-video.jpg" alt="img" />
													<VideoPopup style={1} />
												</div>
												<div className="content">
													<h4>Benefits With Our Service</h4>
													<p>
														{" "}
														Fusce is eleifend porta arcu In hac <br /> habitasse the platea thelorem
													</p>
													<ul className="list">
														<li>
															<i className="fa-regular fa-circle-check" />
															Branding and design Identity
														</li>
														<li>
															<i className="fa-regular fa-circle-check" />
															Web site Marketing Solutions
														</li>
														<li>
															<i className="fa-regular fa-circle-check" />
															unlimited Download Data
														</li>
													</ul>
												</div>
											</div>
											<p>
												Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
												dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis
												nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo
												consequat. Duis aute irure and dolor in reprehenderit.
											</p>
											<div className="image-area">
												<div className="row g-4">
													<div className="col-lg-6 col-md-6">
														<div className="thumb">
															<img src="/assets/img/service/details-2.jpg" alt="img" />
														</div>
													</div>
													<div className="col-lg-6 col-md-6">
														<div className="thumb">
															<img src="/assets/img/service/details-3.jpg" alt="img" />
														</div>
													</div>
												</div>
											</div>
											<h3>Most Comment Question?</h3>
											<p className="mt-3">
												The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend
												porta arcu In hac habitasse the platea thelorem turpoi dictumst. In lacus
												libero faucibus malesuada.
											</p>
										</div>

										<div className="faq-content style-3">
											<div className="faq-accordion">
												<div className="accordion" id="accordion">
													{accordions.map((accordion) => (
														<div
															key={accordion.id}
															className="accordion-item mb-3 wow fadeInUp"
															data-wow-delay={`.${1 + accordion.id * 2}s`}>
															<h5
																className="accordion-header"
																onClick={() => handleClick(accordion.id)}>
																<button
																	className={
																		activeItem == accordion.id
																			? "accordion-button"
																			: "accordion-button collapsed"
																	}>
																	{accordion.title}
																</button>
															</h5>
															<div
																id={`faq${accordion.id}`}
																className={
																	activeItem == accordion.id
																		? "accordion-collapse collapse show"
																		: "accordion-collapse collapse"
																}
																data-bs-parent="#accordion">
																<div className="accordion-body">{accordion.info}</div>
															</div>
														</div>
													))}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
}