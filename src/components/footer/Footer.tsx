import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import snakeLogo from "../../assets/barbershop-pole-logo-optimized.png";

export default function Footer() {
	const currentYear = new Date().getFullYear().toString();
	console.log(currentYear);

	return (
		<footer>
			<div className="location-hours">
				<img
					className="footer-logo-img"
					src={snakeLogo}
					alt="Snake River Barber Co Logo"
				/>
				<div className="address">
					<h3>Location</h3>
					<a
						href="https://www.google.com/maps/place/Snake+River+Barber+Co./@43.4813583,-111.9960497,17z/data=!3m1!4b1!4m5!3m4!1s0x53545f1c945df8c1:0x8d3ca6e04c0145b5!8m2!3d43.4813544!4d-111.9934748"
						target="blank">
						<p>Snake River Barber Co</p>
						<p>1821 Hoopes Ave</p>
						<p>Idaho Falls, ID, 83404</p>
					</a>
					<div className="contact">
						<a href="tel: +1 208-497-0018">(208) 497-0018</a>
					</div>
				</div>
				<div className="hours">
					<h3>Hours</h3>
					<p>
						Monday: <strong>Closed</strong>
					</p>
					<p>Tuesday - Friday: 9AM - 1PM, 2PM - 6PM</p>
					<p>Saturday: 9AM - 3PM</p>
					<p>
						Sunday: <strong>Closed</strong>
					</p>
				</div>
			</div>
			<div className="divider"></div>
			<div className="copyright-socials">
				<p className="copyright">
					&copy; {currentYear} Snake River Barber Co.
				</p>
				<div className="socials">
					<a className="social-icon" href="#">
						<img src={facebookIcon} alt="Facebook link" />
					</a>
					<a className="social-icon" href="#">
						<img src={instagramIcon} alt="Instagram link" />
					</a>
					<a className="social-icon" href="#">
						<img src={linkedinIcon} alt="LinkedIn link" />
					</a>
				</div>
			</div>
		</footer>
	);
}
