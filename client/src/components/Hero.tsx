const Hero = () => {
	return (
		<section className="h-screen flex items-center justify-center text-center -mt-24 pt-48">
			<div className="container mx-auto px-10">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-5xl md:text-8xl font-thin leading-tight mb-8 text-heading-primary">
						Hello, I'm <span className="font-bold text-accent">Lorran</span>
					</h1>
					<p className="text-lg text-text-secondary max-w-xl mx-auto mb-12 font-light">
						Building thoughtful digital experiences with clean code and
						purposeful design.
					</p>
				</div>
				<div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 text-accent text-sm uppercase tracking-wider">
					Scroll
				</div>
			</div>
		</section>
	);
};

export default Hero;
