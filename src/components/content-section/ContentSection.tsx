import React from "react";
import Button from "../general/Button";
import placeholderImage from "../../assets/barbershop-placeholder-2.jpg";

export default function ContentSection({ reverse }: any) {
	return (
		<div
			className={
				reverse === "yes"
					? "content-section-reverse"
					: "content-section"
			}>
			<div className="content">
				<div className="content-text">
					<h3>Content Section Title</h3>
					<p>
						Man bun cornhole distillery polaroid squid. Typewriter
						tumblr lo-fi, biodiesel pop-up kitsch jean shorts blue
						bottle photo booth venmo kombucha gochujang tofu. Four
						loko cornhole jean shorts cloud bread. Gochujang prism
						bushwick.
					</p>
				</div>
				<div className="content-button">
					<Button text="Book Now" />
				</div>
			</div>
			<div className="content-img">
				<img
					className="content-img_img"
					src={placeholderImage}
					alt="Placeholder image"
				/>
			</div>
		</div>
	);
}
