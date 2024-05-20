"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
	const [activeItem, setActiveItem] = useState(-1);
	// console.log(activeItem)

	const handleActiveItem = (index) => {
		setActiveItem(index);
	};

	const mobileNavigation = [
		{ name: "Home", to: "/" },
		{ name: "About", to: "/about" },
		{
			name: "Services",
			to: "/news",
			submenu: [
				{ name: "Services", to: "/service" },
				{ name: "Service Carousel", to: "/service-carousel" },
				{ name: "Service Details", to: "/service-details" },
			],
		},
		{
			name: "Pages",
			to: "/news",
			submenu: [
				{ name: "Project", to: "/project" },
				{ name: "Project Carousel", to: "/project-carousel" },
				{ name: "Project Details", to: "/project-details" },
				{ name: "Our Team", to: "/team" },
				{ name: "Team Carousel", to: "/team-carousel" },
				{ name: "Team Details", to: "/team-details" },
				{ name: "Pricing", to: "/pricing" },
				{ name: "Faq's", to: "/faq" },
				{ name: "404 Page", to: "/404" },
			],
		},
		{
			name: "Blog",
			to: "/news",
			submenu: [
				{ name: "Blog grid", to: "/news" },
				{ name: "Blog Standard", to: "/news-standard" },
				{ name: "Blog Details", to: "/news-details" },
			],
		},
		{ name: "Contact Us", to: "/contact" },
	];

	return (
		<>
			<div className="mobile-menu fix mb-3 mean-container">
				<div className="mean-bar">
					<Link href="/#nav" className="meanmenu-reveal right-0 left-auto inline">
						<span>
							<span>
								<span />
							</span>
						</span>
					</Link>
					<nav className="mean-nav">
						<ul>
							{mobileNavigation.map((menu, index) =>
								!menu.submenu ? (
									<li
										key={menu.name}
										className={mobileNavigation.length == index + 1 ? "mean-last" : ""}>
										<Link href={menu.to}>{menu.name}</Link>
									</li>
								) : (
									<li key={menu.name}>
										<Link href={menu.to}>
											{menu.name}
											<i className="fas fa-angle-down" />
										</Link>
										<ul
											className="submenu"
											style={{ display: `${activeItem === index ? "block" : "none"}` }}>
											{menu.submenu.map((item) => (
												<li key={item.name}>
													<Link href={item.to}>{item.name}</Link>
												</li>
											))}
										</ul>
										<a
											className={`mean-expand ${activeItem === index ? "mean-clicked" : ""}`}
											onClick={() => handleActiveItem(index)}>
											<i className="far fa-plus" />
										</a>
									</li>
								)
							)}
							{/* <li className="has-dropdown active menu-thumb">
								<Link href="/">
									Home
									<i className="fas fa-angle-down" />
								</Link>
								<ul
									className="submenu has-homemenu"
									style={{ display: `${activeItem === 1 ? "block" : "none"}` }}>
									<li>
										<Link href="/">Home 1</Link>
									</li>
									<li>
										<Link href="/index-2">Home 2</Link>
									</li>
									<li>
										<Link href="/index-3">Home 3</Link>
									</li>
									<li>
										<Link href="/index-4">Home 4</Link>
									</li>
								</ul>
								<a
									className={`mean-expand ${activeItem === 1 ? "mean-clicked" : ""}`}
									onClick={() => handleActiveItem(1)}>
									<i className="far fa-plus" />
								</a>
							</li>
							<li>
								<Link href="/about">About</Link>
							</li>
							<li>
								<Link href="/news">
									Services
									<i className="fas fa-angle-down" />
								</Link>
								<ul
									className="submenu"
									style={{ display: `${activeItem === 2 ? "block" : "none"}` }}>
									<li>
										<Link href="/service">Services</Link>
									</li>
									<li>
										<Link href="/service-carousel">Service Carousel</Link>
									</li>
									<li>
										<Link href="/service-details">Service Details</Link>
									</li>
								</ul>
								<a
									className={`mean-expand ${activeItem === 2 ? "mean-clicked" : ""}`}
									onClick={() => handleActiveItem(2)}>
									<i className="far fa-plus" />
								</a>
							</li>
							<li className="has-dropdown">
								<Link href="/news">
									Pages
									<i className="fas fa-angle-down" />
								</Link>
								<ul
									className="submenu"
									style={{ display: `${activeItem === 3 ? "block" : "none"}` }}>
									<li>
										<Link href="/project">Project</Link>
									</li>
									<li>
										<Link href="/project-carousel">Project Carousel</Link>
									</li>
									<li>
										<Link href="/project-details">Project Details</Link>
									</li>
									<li>
										<Link href="/team">Our Team</Link>
									</li>
									<li>
										<Link href="/team-carousel">Team Carousel</Link>
									</li>
									<li>
										<Link href="/team-details">Team Details</Link>
									</li>
									<li>
										<Link href="/pricing">Pricing</Link>
									</li>
									<li>
										<Link href="/faq">Faq's</Link>
									</li>
									<li>
										<Link href="/404">404 Page</Link>
									</li>
								</ul>
								<a
									className={`mean-expand ${activeItem === 3 ? "mean-clicked" : ""}`}
									onClick={() => handleActiveItem(3)}>
									<i className="far fa-plus" />
								</a>
							</li>
							<li>
								<Link href="/news">
									Blog
									<i className="fas fa-angle-down" />
								</Link>
								<ul
									className="submenu"
									style={{ display: `${activeItem === 4 ? "block" : "none"}` }}>
									<li>
										<Link href="/news">Blog Grid</Link>
									</li>
									<li>
										<Link href="/news-standard">Blog Standard</Link>
									</li>
									<li>
										<Link href="/news-details">Blog Details</Link>
									</li>
								</ul>
								<a
									className={`mean-expand ${activeItem === 4 ? "mean-clicked" : ""}`}
									onClick={() => handleActiveItem(4)}>
									<i className="far fa-plus" />
								</a>
							</li>
							<li className="mean-last">
								<Link href="/contact">Contact</Link>
							</li> */}
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
}
