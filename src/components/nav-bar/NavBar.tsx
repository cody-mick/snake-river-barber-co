import React from "react";
import NavBarLink from "./NavBarLink";
import NavBarLogo from "./NavBarLogo";

export default function NavBar() {
	return (
		<div className="nav-bar">
			<NavBarLogo />
			<div className="nav-bar-links">
				<NavBarLink
					text="Schedule Now"
					linkTo="https://square.site/book/1Y6HMQMQYT2XG/snake-river-barber-co-idaho-falls-id"
				/>
			</div>
		</div>
	);
}
