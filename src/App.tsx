import { useState } from "react";
import reactLogo from "./assets/react.svg";
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
			<ContentSection />
			<ContentSection />
			<ContentSection />
			<Footer />
		</div>
	);
}

export default App;
