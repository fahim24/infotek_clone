"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function Messages() {
	const [messages, setMessages] = useState([]);
	const [show, setShow] = useState([]);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("ContactFormData") || "[]");

		setMessages(data);
		setShow(data);
	}, []);

	const updateLocalStorage = (id) => {
		let filteredData = messages.filter((message) => message.id !== id);

		localStorage.setItem("ContactFormData", JSON.stringify(filteredData));
		setShow(filteredData);
		setMessages(filteredData);
	};

	const handleSearch = (e) => {
		let searchValue = e.target.value;

		const filteredData = messages.filter((message) =>
			Object.entries(message).some(
				([key, value]) => key !== "id" && typeof value === "string" && value.includes(searchValue)
			)
		);

		setShow(filteredData);
	};

	return (
		<>
			{messages.length == 0 ? (
				<section className="Error-section section-padding fix">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-9">
								<div className="error-items">
									<div className="error-image">
										<img src="/assets/img/404.png" alt="img" />
									</div>
									<h2>Whoops! No Message Found</h2>
									<Link href="/" className="theme-btn wow fadeInUp" data-wow-delay=".8s">
										Go Back Home
										<i className="fa-solid fa-arrow-right-long" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			) : (
				<div className="section-padding fix">
					<div className="container">
						<input
							type="search"
							name="searchM"
							id="searchM"
							placeholder="Search"
							onChange={handleSearch}
							style={{
								width: "50%",
								padding: "5px",
								marginBottom: "40px",
								marginInline: "auto",
								display: "block",
								color: "black",
							}}
						/>
						<ul className="row " style={{ gap: "20px" }}>
							{show.length == 0
								? "No Result Found"
								: show.map((message) => (
										<li
											key={message.id}
											style={{
												backgroundColor: "#f2f2f2",
												padding: "16px",
												borderRadius: "8px",
												position: "relative",
												width: "30%",
											}}>
											<button
												onClick={() => updateLocalStorage(message.id)}
												style={{
													position: "absolute",
													right: "20px",
													top: "10px",
													cursor: "pointer",
												}}>
												x
											</button>
											<p style={{ fontSize: "12px", marginBottom: "4px" }}>{message.date}</p>
											<p style={{ fontSize: "20px", color: "var(--theme)", fontWeight: "bold" }}>
												{message.name}
											</p>
											<p style={{ fontSize: "14px", marginBottom: "8px" }}>{message.email}</p>
											<q>{message.message}</q>
										</li>
								  ))}
						</ul>
					</div>
				</div>
			)}
		</>
	);
}

export default Messages;
