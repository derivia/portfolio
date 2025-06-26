const Contact = () => {
	return (
		<section
			id="contact"
			className="py-16 bg-contact-bg text-white text-center"
		>
			<div className="container mx-auto px-10">
				<p className="max-w-xl mx-auto mb-10 text-contact-text text-lg leading-relaxed">
					I'd love to hear from you! Feel free to reach out with any questions
					or opportunities.
				</p>
				<a
					href="mailto:contato@lorrran.com"
					className="inline-block text-accent border-2 border-accent px-8 py-4 rounded-md text-lg font-light transition-all duration-300 hover:text-contact-text"
				>
					contato@lorrran.com
				</a>
			</div>
		</section>
	);
};

export default Contact;
