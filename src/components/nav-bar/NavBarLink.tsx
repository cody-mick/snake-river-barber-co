export default function NavBarLink({ text, linkTo }: any) {
	return (
		<div>
			<a href={linkTo}>{text}</a>
		</div>
	);
}
