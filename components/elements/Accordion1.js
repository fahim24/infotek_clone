"use client";
import { useState } from "react";
export default function Accordion1() {
	const [activeItem, setActiveItem] = useState(1);

	const handleClick = (index) => {
		setActiveItem(index);
	};
	const Items = [
		{
			id: 1,
			title: "How long should a business plan be?",
			body: "There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.",
		},
		{
			id: 2,
			title: "What is included in your services?",
			body: "There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.",
		},
		{
			id: 3,
			title: "What type of company is measured?",
			body: "There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.",
		},
	];
	return (
		<>
			<div className="accordion" id="accordion">
				{Items.map((item) => (
					<div
						key={item.id}
						className="accordion-item mb-3 wow fadeInUp"
						data-wow-delay={`.${1 + item.id * 2}s`}>
						<h5 className="accordion-header" onClick={() => handleClick(item.id)}>
							<button
								className={
									activeItem == item.id ? "accordion-button" : "accordion-button collapsed"
								}
								type="button"
								data-bs-toggle="collapse"
								data-bs-target={`#faq${item.id}`}
								aria-expanded={activeItem == item.id ? "true" : "false"}
								aria-controls={`faq${item.id}`}>
								{item.title}
							</button>
						</h5>
						<div
							id={`faq${item.id}`}
							className={
								activeItem == item.id
									? "accordion-collapse collapse show"
									: "accordion-collapse collapse"
							}
							data-bs-parent="#accordion">
							<div className="accordion-body">{item.body}</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
