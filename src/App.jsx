import React from "react";
import Experience from "./components/Experience/Experience";
import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Tech from "./components/Tech/Tech";
import css from "./styles/App.module.scss";

const App = () => {
	return (
		<div className={`bg-primary ${css.container}`}>
			<Header />
			<Hero />
			<Experties />
			<Experience />
			<Portfolio />
			<Tech />
			<Footer />
		</div>
	);
};

export default App;
