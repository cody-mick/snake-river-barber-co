import React from "react";
import heroImage from "../../assets/hero-image.jpg";

export default function Hero() {
	return (
		<div className="hero-image">
			{/* <img
				className="hero-image"
				src={heroImage}
				alt="Snake River Barbershop Interior"
			/> */}
			<div className="hero-text">
				<h3>Snake River Barber Co.</h3>
			</div>
		</div>
	);
}
