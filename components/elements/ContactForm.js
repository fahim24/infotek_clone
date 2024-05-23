"use client";
import React, { useEffect } from "react";

function ContactForm() {
	let storedData = [];

	useEffect(() => {
		storedData = JSON.parse(localStorage.getItem("ContactFormData") || "[]");
	}, []);

	const saveToLocalStorage = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);

		const contactData = {
			id: generateRandomString(8),
			name: formData.get("name"),
			email: formData.get("email"),
			message: formData.get("message"),
			date: new Date().toUTCString(),
		};

		storedData.push(contactData);

		localStorage.setItem("ContactFormData", JSON.stringify(storedData));

		e.target.reset();
		alert("Message Sent");
	};

	return (
		<form id="contact-form" className="contact-form-items" onSubmit={saveToLocalStorage}>
			<div className="row g-4">
				<div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
					<div className="form-clt">
						<span>Your name*</span>
						<input type="text" name="name" id="name" placeholder="Your Name" required />
					</div>
				</div>
				<div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
					<div className="form-clt">
						<span>Your Email*</span>
						<input type="email" name="email" id="email" placeholder="Your Email" required />
					</div>
				</div>
				<div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
					<div className="form-clt">
						<span>Write Message*</span>
						<textarea name="message" id="message" placeholder="Write Message" required />
					</div>
				</div>
				<div className="col-lg-7 wow fadeInUp" data-wow-delay=".9s">
					<button type="submit" className="theme-btn">
						Send Message <i className="fa-solid fa-arrow-right-long" />
					</button>
				</div>
			</div>
		</form>
	);
}

function generateRandomString(length) {
	let result = "";
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

export default ContactForm;
