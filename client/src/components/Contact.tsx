const Contact = () => {
	return (
		<section id="contact" className="py-20 bg-section-bg">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
					Contact Me
				</h2>
				<p className="mb-8 text-lg text-text-secondary">
					I would love to hear from you! Feel free to reach out with any
					questions or opportunities.
				</p>
				<a
					href="mailto:contato.lorransoares@gmail.com"
					className="bg-accent text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-accent-hover hover:shadow-lg transition-all duration-300"
				>
					contato.lorransoares@gmail.com
				</a>
			</div>
		</section>
	);
};

export default Contact;
