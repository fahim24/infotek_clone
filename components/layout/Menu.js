import Link from "next/link";

export default function Menu() {
	const navigations = [
		{
			name: "Home",
			to: "/",
		},
		{
			name: "About",
			to: "/about",
		},
		{
			name: "Services",
			to: "/service",
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
				{
					name: "Projects",
					to: "/project",
					submenu: [
						{ name: "Project", to: "/project" },
						{ name: "Project Carousel", to: "/project-carousel" },
						{ name: "Project Details", to: "/project-details" },
					],
				},
				{
					name: "Team",
					to: "/team",
					submenu: [
						{ name: "Our Team", to: "/team" },
						{ name: "Team Carousel", to: "/team-carousel" },
						{ name: "Team Details", to: "/team-details" },
					],
				},
				{ name: "Pricing", to: "/pricing" },
				{ name: "Theme", to: "/theme" },
				{ name: "Faq's", to: "/faq" },
				{ name: "404 Page", to: "/404" },
			],
		},
		{
			name: "Blog",
			to: "/news",
			submenu: [
				{ name: "Blog Grid", to: "/news" },
				{ name: "Blog Standard", to: "/news-standard" },
				{ name: "Blog Details", to: "/news-details" },
			],
		},
		{
			name: "Contact",
			to: "/contact",
			submenu: [
				{ name: "Contact", to: "/contact" },
				{ name: "Messages", to: "/contact/message" },
			],
		},
	];

	return (
		<>
			<ul>
				{navigations.map((navigation) =>
					// Check if has submenu
					!navigation.submenu ? (
						// If no submenu
						<li key={navigation.name}>
							<Link href={navigation.to}>{navigation.name}</Link>
						</li>
					) : (
						// if submenu
						<li className="has-dropdown" key={navigation.name}>
							<Link href={navigation.to}>
								{navigation.name}
								<i className="fas fa-angle-down ps-1" />
							</Link>
							<ul className="submenu">
								{/* looping submenu*/}
								{navigation.submenu.map((submenu) =>
									// check if submenu has its own submenu
									!submenu.submenu ? (
										// if not
										<li key={submenu.name}>
											<Link href={submenu.to}>{submenu.name}</Link>
										</li>
									) : (
										// if has submenu
										<li className="has-dropdown" key={submenu.name}>
											<Link href={submenu.to}>
												{submenu.name}
												<i className="fas fa-angle-down ps-1" />
											</Link>
											<ul className="submenu">
												{/* looping submenu of submneu */}
												{submenu.submenu.map((submenu) => (
													<li key={submenu.name}>
														<Link href={submenu.to}>{submenu.name}</Link>
													</li>
												))}
											</ul>
										</li>
									)
								)}
							</ul>
						</li>
					)
				)}
				{/* <li className="has-dropdown active menu-thumb">
					<Link href="/">
						Home
						<i className="fas fa-angle-down ps-1" />
					</Link>
					<ul className="submenu has-homemenu">
						<li>
							<div className="homemenu-items">
								<div className="homemenu">
									<div className="homemenu-thumb">
										<img src="/assets/img/header/home-1.jpg" alt="img" />
										<div className="demo-button">
											<Link href="/" className="theme-btn">
												<span>Multi Page</span>
											</Link>
											<Link href="/index-one-page" className="theme-btn">
												<span>One Page</span>
											</Link>
										</div>
									</div>
									<div className="homemenu-content text-center">
										<h4 className="homemenu-title">Home 01</h4>
									</div>
								</div>
								<div className="homemenu">
									<div className="homemenu-thumb mb-15">
										<img src="/assets/img/header/home-2.jpg" alt="img" />
										<div className="demo-button">
											<Link href="/index-2" className="theme-btn">
												<span>Multi Page</span>
											</Link>
											<Link href="/index-two-page" className="theme-btn">
												<span>One Page</span>
											</Link>
										</div>
									</div>
									<div className="homemenu-content text-center">
										<h4 className="homemenu-title">Home 02</h4>
									</div>
								</div>
								<div className="homemenu">
									<div className="homemenu-thumb mb-15">
										<img src="/assets/img/header/home-3.jpg" alt="img" />
										<div className="demo-button">
											<Link href="/index-3" className="theme-btn">
												<span>Multi Page</span>
											</Link>
											<Link href="/index-three-page" className="theme-btn">
												<span>One Page</span>
											</Link>
										</div>
									</div>
									<div className="homemenu-content text-center">
										<h4 className="homemenu-title">Home 03</h4>
									</div>
								</div>
								<div className="homemenu">
									<div className="homemenu-thumb mb-15">
										<img src="/assets/img/header/home-4.jpg" alt="img" />
										<div className="demo-button">
											<Link href="/index-4" className="theme-btn">
												<span>Multi Page</span>
											</Link>
											<Link href="/index-four-page" className="theme-btn">
												<span>One Page</span>
											</Link>
										</div>
									</div>
									<div className="homemenu-content text-center">
										<h4 className="homemenu-title">Home 04</h4>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</li> */}
				{/* <li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/news">
						Services
						<i className="fas fa-angle-down ps-1" />
					</Link>
					<ul className="submenu">
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
				</li>
				<li className="has-dropdown">
					<Link href="/news">
						Pages
						<i className="fas fa-angle-down ps-1" />
					</Link>
					<ul className="submenu">
						<li className="has-dropdown">
							<Link href="/project">
								Projects
								<i className="fas fa-angle-down ps-1" />
							</Link>
							<ul className="submenu">
								<li>
									<Link href="/project">Project</Link>
								</li>
								<li>
									<Link href="/project-carousel">Project Carousel</Link>
								</li>
								<li>
									<Link href="/project-details">Project Details</Link>
								</li>
							</ul>
						</li>
						<li className="has-dropdown">
							<Link href="/team">
								Team
								<i className="fas fa-angle-down ps-1" />
							</Link>
							<ul className="submenu">
								<li>
									<Link href="/team">Our Team</Link>
								</li>
								<li>
									<Link href="/team-carousel">Team Carousel</Link>
								</li>
								<li>
									<Link href="/team-details">Team Details</Link>
								</li>
							</ul>
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
				</li>
				<li>
					<Link href="/news">
						Blog
						<i className="fas fa-angle-down ps-1" />
					</Link>
					<ul className="submenu">
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
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li> */}
			</ul>
		</>
	);
}
