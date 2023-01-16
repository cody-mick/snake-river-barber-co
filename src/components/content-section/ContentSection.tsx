import React from "react";
import Button from "../general/Button";
import placeholderImage from "../../assets/barbershop-placeholder-2.jpg";

export default function ContentSection({ reverse, children, title }: any) {
	return (
		<div
			className={
				reverse === "yes"
					? "content-section-reverse"
					: "content-section"
			}>
			<div className="content">
				<div className="content-text">
					<h2>{title}</h2>
					<p>{children}</p>
				</div>
				<div className="content-button">
					<Button
						text="Book Now"
						link="https://squareup.com/appointments/book/1Y6HMQMQYT2XG"
					/>
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
