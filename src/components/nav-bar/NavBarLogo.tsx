import React from "react";
import mainLogo from "../../assets/snake-river-barber-co-logo-optimized.png";

export default function NavBarLogo() {
	return (
		<div className="nav-bar-logo">
			<img
				className="nav-bar-logo-img"
				src={mainLogo}
				alt="Snake River Barber Shop Co Logo"
			/>
		</div>
	);
}
