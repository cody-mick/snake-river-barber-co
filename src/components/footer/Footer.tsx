import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import locationIcon from "../../assets/location-crosshairs-solid.svg";

export default function Footer() {
	const currentYear = new Date().getFullYear().toString();
	console.log(currentYear);

	return (
		<footer>
			<div className="location-hours">
				<div className="location">
					<h3>Location</h3>
					<div className="address">
						{/* <img
							className="location-icon"
							src={locationIcon}
							alt="Location icon"
						/> */}
						<a href="https://www.google.com/maps/place/1821+Hoopes+Ave,+Idaho+Falls,+ID+83404/@43.4813583,-111.9960497,17z/data=!3m1!4b1!4m5!3m4!1s0x53545edda576c10f:0xc19a7e577b472f49!8m2!3d43.4813544!4d-111.9934748">
							1821 Hoopes Ave, Idaho Falls, ID 83404
						</a>
					</div>
				</div>
				<div className="hours">
					<h3>Hours</h3>
					<p>Monday Closed</p>
					<p>Tuesday 9AM - 1PM, 2PM - 6PM</p>
					<p>Wednesday 9AM - 1PM, 2PM - 6PM</p>
					<p>Thursday 9AM - 1PM, 2PM - 6PM</p>
					<p>Friday 9AM - 1PM, 2PM - 6PM</p>
					<p>Saturday 9AM - 3PM</p>
					<p>Sunday Closed</p>
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
