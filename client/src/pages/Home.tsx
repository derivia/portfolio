import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Work from "../components/Work";

const Home = () => {
	return (
		<div className="bg-background text-text-primary">
			<Header />
			<main>
				<Hero />
				<About />
				<Skills />
				<Work />
				<Contact />
			</main>
			<Footer />
		</div>
	);
};

export default Home;
