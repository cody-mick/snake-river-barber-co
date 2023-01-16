import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import ContentSection from "./components/content-section/ContentSection";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Hero />
			<ContentSection reverse={"no"} title="Our Story">
				Snake River Barber Co opened in April of 2019 with the vision of
				incorporating new trends with the feel of a classic, old-school
				barber shop.
			</ContentSection>
			<ContentSection reverse={"yes"} title="The Highest Quality">
				We pride ourselves on delivering quality services and building
				relationships with our clients, so that you look and feel your
				best. We run by appointment only, so click below to schedule
				with us now!
			</ContentSection>
			<Footer />
		</div>
	);
}

export default App;
