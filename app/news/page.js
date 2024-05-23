import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function News() {
	const news = [
		{
			id: 1,
			imgSrc: "/assets/img/news/04.jpg",
			date: {
				day: 17,
				month: "Feb",
			},
			author: "Admin",
			tag: "IT Services",
			titile: "Simplify Streamline Succeed IT Solutions",
		},
		{
			id: 2,
			imgSrc: "/assets/img/news/07.jpg",
			date: {
				day: 20,
				month: "May",
			},
			author: "Admin",
			tag: "UI/UX Design",
			titile: "Unlocking Potential Through Technology",
		},
		{
			id: 3,
			imgSrc: "/assets/img/news/08.jpg",
			date: {
				day: 10,
				month: "Feb",
			},
			author: "Admin",
			tag: "Cyber Security",
			titile: "Supervisor Disapproved of Latest Work.",
		},
		{
			id: 4,
			imgSrc: "/assets/img/news/08.jpg",
			date: {
				day: 10,
				month: "Feb",
			},
			author: "Admin",
			tag: "Cyber Security",
			titile: "Supervisor Disapproved of Latest Work.",
		},
		{
			id: 5,
			imgSrc: "/assets/img/news/04.jpg",
			date: {
				day: 17,
				month: "Feb",
			},
			author: "Admin",
			tag: "IT Services",
			titile: "Simplify Streamline Succeed IT Solutions",
		},
		{
			id: 6,
			imgSrc: "/assets/img/news/07.jpg",
			date: {
				day: 20,
				month: "May",
			},
			author: "Admin",
			tag: "UI/UX Design",
			titile: "Unlocking Potential Through Technology",
		},
	];
	return (
		<>
			<Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog Grid">
				<section className="news-section-4 fix section-padding">
					<div className="container">
						<div className="row g-4">
							{news.map((item) => (
								<div
									key={item.id}
									className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
									data-wow-delay={`.${1 + item.id * 2}s`}>
									<div className="news-card-items style-2 mt-0 pb-0">
										<div className="news-image">
											<img src={item.imgSrc} alt="news-img" />
											<div className="post-date">
												<h3>
													{item.date.day} <br /> <span>{item.date.month}</span>
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
												<Link href="/news-details">{item.titile}</Link>
											</h3>
											<Link href="/news-details" className="theme-btn-2 mt-3">
												read More
												<i className="fa-solid fa-arrow-right-long" />
											</Link>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
}
