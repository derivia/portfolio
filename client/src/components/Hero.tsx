const Hero = () => {
	return (
		<section
			id="hero"
			className="w-full min-h-screen flex flex-col justify-center items-center bg-background py-20"
		>
			<div className="text-center md:text-left mb-16">
				<h1 className="text-3xl md:text-6xl md:text-left text-center font-bold mb-6 text-heading-primary leading-tight">
					Hi, I'm{" "}
					<span className="inline-block bg-accent-light text-accent px-4 py-2 rounded-xl">
						Lorran
					</span>
				</h1>
				<p className="text-xl p-5 md:p-0 md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
					A passionate developer creating thoughtful web experiences with clean
					code and meaningful design.
				</p>
			</div>
		</section>
	);
};

export default Hero;
