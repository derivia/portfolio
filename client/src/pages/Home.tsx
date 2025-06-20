import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home = () => {
	return (
		<div className="bg-background text-text-color">
			<Header />
			<main>
				<Hero />
				<About />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</div>
	);
};

export default Home;
