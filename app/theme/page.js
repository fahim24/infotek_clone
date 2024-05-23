"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";

function Theme() {
	const [colors, setColors] = useState({});

	useEffect(() => {
		const r = document.querySelector(":root");

		const getVar = (name) => {
			let rs = getComputedStyle(r);

			return rs.getPropertyValue(name);
		};

		setColors({
			theme: getVar("--theme"),
			header: getVar("--header"),
			text: getVar("--text"),
		});
	}, []);

	const handleChange = (e, name) => {
		const newTheme = e.target.value;
		setColors((prevColors) => ({ ...prevColors, [name]: newTheme }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);

		const themeData = {
			header: formData.get("header-color"),
			theme: formData.get("theme-color"),
			text: formData.get("text-color"),
		};

		localStorage.setItem("theme-data", JSON.stringify(themeData));

		const r = document.querySelector(":root");

		Object.entries(colors).forEach(([key, value]) => {
			r.style.setProperty(`--${key}`, value);
		});

		alert("Colors Updated");
	};

	return (
		<Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Theme">
			<div className="section-padding fix">
				<div className="container">
					<form onSubmit={handleSubmit}>
						<div
							style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
							<label htmlFor="header-color" style={{ marginRight: "5px" }}>
								Change Current Main-Theme Color
							</label>
							<input
								type="color"
								id="header-color"
								name="header-color"
								value={colors.header}
								onChange={(e) => handleChange(e, "header")}
							/>
						</div>
						<div
							style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
							<label htmlFor="theme-color">Change Current Sub-Theme Color</label>
							<input
								type="color"
								id="theme-color"
								name="theme-color"
								value={colors.theme}
								onChange={(e) => handleChange(e, "theme")}
							/>
						</div>

						<div
							style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
							<label htmlFor="text-color" style={{ marginRight: "5px" }}>
								Change Current Text Color
							</label>
							<input
								type="color"
								id="text-color"
								name="text-color"
								value={colors.text}
								onChange={(e) => handleChange(e, "text")}
							/>
						</div>

						<div className="wow fadeInUp" data-wow-delay=".9s">
							<button type="submit" className="theme-btn">
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	);
}

export default Theme;
