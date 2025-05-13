// src/App.jsx
import { lazy, Suspense, memo, useState } from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./pages/Hero.jsx";
import Loading from "./pages/Loader.jsx";

const About = lazy(() => import("./pages/About.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

const App = () => {
	const Name = "Ajith Goveas";
	const [loading, setLoading] = useState(true);

	// Loader will call this after pulse is finished
	const handlePulseComplete = () => {
		setLoading(false);
	};

	return loading ? (
		<Loading onPulseComplete={handlePulseComplete} />
	) : (
		<div className="App">
			<Header />
			<Hero name={Name} />
			<Suspense
				fallback={<div className="text-center text-white">Loading...</div>}
			>
				<About />
				<Projects />
				<Contact />
			</Suspense>
			<Footer name={Name} />
		</div>
	);
};

export default memo(App);
