import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function NewsStandard() {
	const news = [
		{
			id: 1,
			imgSrc: "/assets/img/news/post-1.jpg",
			date: {
				day: 17,
				month: "Feb",
			},
			author: "Admin",
			tag: "IT Services",
			title: "Keep Your Business Safe & Ensure High Availability",
			body: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.	Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis	ligula consectetur...",
		},
		{
			id: 2,
			imgSrc: "/assets/img/news/post-2.jpg",
			date: {
				day: 19,
				month: "Feb",
			},
			author: "Admin",
			tag: "IT Services",
			title: "Tackling the Changes of Retail Industry",
			body: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.	Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis	ligula consectetur...",
		},
		{
			id: 3,
			imgSrc: "/assets/img/news/post-3.jpg",
			date: {
				day: 28,
				month: "Feb",
			},
			author: "Admin",
			tag: "IT Services",
			title: "What’s the Holding Back the It Solution",
			body: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.	Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis	ligula consectetur...",
		},
	];
	const categories = [
		{ name: "Database Security", amount: 8 },
		{ name: "IT Consultancy", amount: 11 },
		{ name: "App Development", amount: 12 },
		{ name: "UI/UX Design", amount: 18 },
		{ name: "Cyber Security", amount: 7 },
	];
	const posts = [
		{
			id: 1,
			name: "Keep Your Business Safe & Endure High Availability",
			date: "18 Dec, 2024",
			imgSrc: "/assets/img/news/pp3.jpg",
		},
		{
			id: 2,
			name: "Tacking the Changes of	Retail Industry",
			date: "18 Dec, 2024",
			imgSrc: "/assets/img/news/pp4.jpg",
		},
		{
			id: 3,
			name: "What’s the Holding Back the It Solution",
			date: "18 Dec, 2024",
			imgSrc: "/assets/img/news/pp5.jpg",
		},
	];

	const tags = [
		{ name: "News" },
		{ name: "business" },
		{ name: "marketing" },
		{ name: "solution" },
		{ name: "SMM" },
		{ name: "strategy" },
		{ name: "SEO" },
	];
	return (
		<>
			<Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog Standard">
				<section className="news-standard fix section-padding">
					<div className="container">
						<div className="row g-4">
							<div className="col-12 col-lg-8">
								<div className="news-standard-wrapper">
									{news.map((item) => (
										<div key={item.id} className="news-standard-items">
											<div className="news-thumb">
												<img src={item.imgSrc} alt="img" />
												<div className="post-date">
													<h3>
														{item.date.day} <br />
														<span>{item.date.month}</span>
													</h3>
												</div>
											</div>
											<div className="news-content">
												<ul>
													<li>
														<i className="fa-regular fa-user" />
														By {item.author}
													</li>
													<li>
														<i className="fa-solid fa-tag" />
														{item.tag}
													</li>
												</ul>
												<h3>
													<Link href="/news-details">{item.title}</Link>
												</h3>
												<p>{item.body}</p>
												<Link href="/news-details" className="theme-btn mt-4">
													Read More
													<i className="fa-solid fa-arrow-right-long" />
												</Link>
											</div>
										</div>
									))}
									<div className="page-nav-wrap pt-5 text-center">
										<ul>
											<li>
												<Link className="page-numbers" href="#">
													01
												</Link>
											</li>
											<li>
												<Link className="page-numbers" href="#">
													02
												</Link>
											</li>
											<li>
												<Link className="page-numbers" href="#">
													03
												</Link>
											</li>
											<li>
												<Link className="page-numbers" href="#">
													<i className="fa-solid fa-arrow-right-long" />
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-4">
								<div className="main-sidebar">
									<div className="single-sidebar-widget">
										<div className="wid-title">
											<h3>Search</h3>
										</div>
										<div className="search-widget">
											<form action="#">
												<input type="text" placeholder="Search here" />
												<button type="submit">
													<i className="fa-solid fa-magnifying-glass" />
												</button>
											</form>
										</div>
									</div>
									<div className="single-sidebar-widget">
										<div className="wid-title">
											<h3>Categories</h3>
										</div>
										<div className="news-widget-categories">
											<ul>
												{categories.map((category, idx) => (
													<li key={category.name} className={idx == 1 ? "active" : ""}>
														<Link href="/news-details">{category.name}</Link>{" "}
														<span>({category.amount})</span>
													</li>
												))}
											</ul>
										</div>
									</div>
									<div className="single-sidebar-widget">
										<div className="wid-title">
											<h3>Recent Post</h3>
										</div>
										<div className="recent-post-area">
											{posts.map((post) => (
												<div key={post.id} className="recent-items">
													<div className="recent-thumb">
														<img src={post.imgSrc} alt="img" />
													</div>
													<div className="recent-content">
														<ul>
															<li>
																<i className="fa-solid fa-calendar-days" />
																{post.date}
															</li>
														</ul>
														<h6>
															<Link href="/news-details">{post.name}</Link>
														</h6>
													</div>
												</div>
											))}
										</div>
									</div>
									<div className="single-sidebar-widget">
										<div className="wid-title">
											<h3>Tags</h3>
										</div>
										<div className="news-widget-categories">
											<div className="tagcloud">
												{tags.map((tag) => (
													<Link key={tag.name} href="/news-details">
														{tag.name}
													</Link>
												))}
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
