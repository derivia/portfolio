const Hero = () => {
	return (
		<section
			id="hero"
			className="w-full h-full text-center py-32 flex flex-col items-center"
		>
			<div className="z-50 bg-cover bg-center rounded-md shadow-md w-[50%] h-full bg-[url(/hero-bg.jpg)] block text-white flex flex-col gap-2 py-16 px-6">
				<span className="text-3xl">Hi, I'm Lorran!</span>
				<br />
				<span className="text-2xl">
					I am a passionate developer creating amazing web experiences.
				</span>
			</div>
		</section>
	);
};

export default Hero;
