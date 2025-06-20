const Hero = () => {
	return (
		<section
			id="hero"
			className="w-full h-full text-center py-32 flex flex-col items-center bg-background-secondary"
		>
			<div className="z-30 bg-cover bg-center inner-shadow rounded-md shadow-xl w-[50%] h-full bg-[url(/hero-bg.png)] block text-white flex flex-col gap-2 py-32 px-12">
				<span className="text-5xl">Hi, I'm Lorran!</span>
				<br />
				<span className="text-4xl">
					I am a passionate developer creating amazing web experiences.
				</span>
			</div>
		</section>
	);
};

export default Hero;
