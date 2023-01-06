import React from "react";
import NavBarLink from "./NavBarLink";
import NavBarLogo from "./NavBarLogo";

export default function NavBar() {
	return (
		<div className="nav-bar">
			<NavBarLogo />
			<div className="nav-bar-links">
				<NavBarLink text="Schedule Now" linkTo="#" />
			</div>
		</div>
	);
}
