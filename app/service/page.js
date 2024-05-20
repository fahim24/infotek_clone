import Accordion1 from "@/components/elements/Accordion1";
import Layout from "@/components/layout/Layout";
import Contact1 from "@/components/sections/Contact1";
import Faq1 from "@/components/sections/Faq1";
import Link from "next/link";
export default function Service() {
	const services = [
		{
			icon: "/assets/img/service/icon/s-icon-1.svg",
			name: "Database Security",
			details: "Mauris ultrices ligula eget volutpat aliquet nullam",
		},
		{
			icon: "/assets/img/service/icon/s-icon-2.svg",
			name: "IT Consultancy",
			details: "Mauris ultrices ligula eget volutpat aliquet nullam",
		},
		{
			icon: "/assets/img/service/icon/s-icon-3.svg",
			name: "Cyber Security",
			details: "Mauris ultrices ligula eget volutpat aliquet nullam",
		},
		{
			icon: "/assets/img/service/icon/s-icon-4.svg",
			name: "App Development",
			details: "Mauris ultrices ligula eget volutpat aliquet nullam",
		},
		{
			icon: "/assets/img/service/icon/s-icon-10.svg",
			name: "UI/UX Design",
			details: "Mauris ultrices ligula eget volutpat aliquet nullam",
		},
		{
			icon: "/assets/img/service/icon/s-icon-11.svg",
			name: "IT Management",
			details: "Mauris ultrices ligula eget volutpat aliquet nullam",
		},
		{
			icon: "/assets/img/service/icon/s-icon-12.svg",
			name: "Digital Marketing",
			details: "Mauris ultrices ligula eget volutpat aliquet nullam",
		},
		{
			icon: "/assets/img/service/icon/s-icon-13.svg",
			name: "Data Analysis",
			details: "Mauris ultrices ligula eget volutpat aliquet nullam",
		},
	];

	return (
		<>
			<Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Services">
				<section className="service-section fix section-padding">
					<div className="container">
						<div className="section-title text-center">
							<span className="wow fadeInUp">OUR SERVICES</span>
							<h2 className="wow fadeInUp" data-wow-delay=".3s">
								We Provide the Best Quality
							</h2>
						</div>
						<div className="service-wrapper mb-0">
							<div className="row">
								{services.map((service, idx) => (
									<div
										key={idx}
										className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
										data-wow-delay={`.${3 + idx * 2}s`}>
										<div className="service-box-items box-shadow">
											<div className="icon">
												<img src={service.icon} alt="icon-img" />
											</div>
											<div className="content">
												<h4>
													<Link href="/service-details">{service.name}</Link>
												</h4>
												<p>{service.details}</p>
												<Link href="/service-details" className="theme-btn-2 mt-3">
													read More
													<i className="fa-solid fa-arrow-right-long" />
												</Link>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
				<Faq1 />
				<Contact1 />
			</Layout>
		</>
	);
}
