import React from "react";
import NavBarLink from "./NavBarLink";
import NavBarLogo from "./NavBarLogo";

export default function NavBar() {
	return (
		<div className="nav-bar">
			<NavBarLogo />
			<div className="nav-bar-links">
				<NavBarLink
					text="Shop"
					linkTo="https://shop.snakeriverbarberco.hair"
				/>
				<NavBarLink
					text="Schedule Now"
					linkTo="https://squareup.com/appointments/book/1Y6HMQMQYT2XG"
				/>
			</div>
		</div>
	);
}
