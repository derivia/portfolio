const Contact = () => {
	return (
		<section id="contact" className="py-16 bg-contact-bg text-center">
			<div className="container mx-auto px-4 md:px-8">
				<h2 className="text-3xl font-normal mb-6 text-center relative">
					Let's Connect
					<span className="absolute bottom-[-0.5rem] left-1/2 -translate-x-1/2 w-10 h-px bg-section-title-underline"></span>
				</h2>
				<p className="max-w-md mx-auto mb-8 text-text-secondary">
					I'd love to hear from you! Feel free to reach out with any questions
					or opportunities.
				</p>
				<a
					href="mailto:contato.lorransoares@gmail.com"
					className="inline-block bg-contact-email-bg text-white px-8 py-3 rounded-full text-sm tracking-wider transition-colors duration-200 hover:bg-contact-email-hover-bg"
				>
					contato.lorransoares@gmail.com
				</a>
			</div>
		</section>
	);
};

export default Contact;
