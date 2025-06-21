import SectionTitle from "./SectionTitle";

const Contact = () => {
	return (
		<section id="contact" className="py-20 bg-background text-center">
			<div className="container mx-auto px-6 md:px-12">
				<SectionTitle title="Let's Connect" />
				<p className="max-w-xl mx-auto mb-10 text-text-secondary text-lg">
					I'd love to hear from you! Feel free to reach out with any questions
					or opportunities.
				</p>
				<a
					href="mailto:contato.lorransoares@gmail.com"
					className="inline-block bg-accent text-white px-10 py-4 rounded-lg text-md font-semibold tracking-wider transition-colors duration-200 hover:bg-contact-email-hover-bg shadow-md"
				>
					contato.lorransoares@gmail.com
				</a>
			</div>
		</section>
	);
};

export default Contact;
