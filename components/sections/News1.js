import Link from "next/link";

export default function News1() {
	const news = [
		{
			id: 1,
			imgSrc: "assets/img/news/01.jpg",
			date: "Feb, 2024",
			title: "Top 5 Most Famous Technology Trend In 2024",
			body: "Nulla ut turpis a nisi vulputate varius non ut lectus. Ut vulputate tempus	tincidunt. Duis mi tellus,",
		},
		{
			id: 2,
			imgSrc: "assets/img/news/03.jpg",
			date: "May, 2024",
			title: "Top 5 Most Famous Technology Trend In 2024",
			body: "Nulla ut turpis a nisi vulputate varius non ut lectus. Ut vulputate tempus	tincidunt. Duis mi tellus,",
		},
		{
			id: 3,
			imgSrc: "assets/img/news/02.jpg",
			date: "July, 2024",
			title: "Top 5 Most Famous Technology Trend In 2024",
			body: "Nulla ut turpis a nisi vulputate varius non ut lectus. Ut vulputate tempus	tincidunt. Duis mi tellus,",
		},
	];
	return (
		<>
			<section className="news-section section-padding fix" id="blog">
				<div className="container">
					<div className="section-title text-center">
						<span className="wow fadeInUp">Article</span>
						<h2 className="wow fadeInUp" data-wow-delay=".3s">
							Read Our Latest Blog
						</h2>
					</div>
				</div>
				<div className="news-wrapper">
					<div className="row">
						{news.map((item) => (
							<div
								key={item.id}
								className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
								data-wow-delay={`.${1 + 2 * item.id}s`}>
								<div className="single-news-items">
									<div
										className="news-image bg-cover"
										style={{ backgroundImage: `url(${item.imgSrc})` }}>
										<div className="post-date">
											<span>{item.date}</span>
										</div>
									</div>
									<div className="news-content">
										<h3>
											<Link href="/news-details" style={{ textWrap: "balance" }}>
												{item.title}
											</Link>
										</h3>
										<p>{item.body}</p>
										<Link href="/news-details" className="theme-btn-2 mt-3">
											Read More
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
