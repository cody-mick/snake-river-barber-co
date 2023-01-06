export default function NavBarLink({ text, linkTo }: any) {
	return (
		<div className="nav-bar-link">
			<a href={linkTo} className="nav-bar-link_link">
				{text}
			</a>
		</div>
	);
}
