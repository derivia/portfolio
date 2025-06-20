const Hero = () => {
	return (
		<section
			id="hero"
			className="w-full h-full text-center mt-64 flex flex-col items-center bg-background"
		>
			<div className="mb-12">
				<h1 className="text-4xl md:text-5xl font-normal mb-4 text-heading-primary">
					Hi, I'm{" "}
					<span className="inline-block accent-gradient px-2 rounded font-medium">
						Lorran
					</span>
				</h1>
				<p className="text-md md:text-lg text-text-secondary max-w-md mx-auto">
					A passionate developer creating thoughtful web experiences with clean
					code and meaningful design.
				</p>
			</div>
		</section>
	);
};

export default Hero;
