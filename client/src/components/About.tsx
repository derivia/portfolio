import SectionTitle from "./SectionTitle";

const About = () => {
	return (
		<section id="about" className="py-24">
			<div className="container mx-auto px-10">
				<SectionTitle title="About Me" />
				<div className="max-w-3xl mx-auto text-center">
					<p className="text-xl text-about-text leading-loose mb-16">
						I'm a passionate full-stack developer focused on creating meaningful
						digital experiences. My work combines technical precision with
						creative problem-solving, always prioritizing clean code and
						user-centered design.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-20">
						<div className="text-center">
							<div className="text-5xl font-thin text-accent mb-2">6+</div>
							<div className="text-sm text-text-secondary uppercase tracking-widest">
								Years Experience
							</div>
						</div>
						<div className="text-center">
							<div className="text-5xl font-thin text-accent mb-2">25+</div>
							<div className="text-sm text-text-secondary uppercase tracking-widest">
								Projects Completed
							</div>
						</div>
						<div className="text-center">
							<div className="text-5xl font-thin text-accent mb-2">16+</div>
							<div className="text-sm text-text-secondary uppercase tracking-widest">
								Technologies
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
