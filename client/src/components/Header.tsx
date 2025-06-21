const Header = () => {
	return (
		<div className="container mx-auto px-6 md:px-12 pt-8">
			<nav className="relative flex justify-center md:justify-end gap-10 mb-8 md:mb-0">
				<a
					href="#about"
					className="text-text-secondary hover:text-accent transition-colors duration-200 text-base font-medium tracking-wide"
				>
					About
				</a>
				<a
					href="#projects"
					className="text-text-secondary hover:text-accent transition-colors duration-200 text-base font-medium tracking-wide"
				>
					Projects
				</a>
				<a
					href="#contact"
					className="text-text-secondary hover:text-accent transition-colors duration-200 text-base font-medium tracking-wide"
				>
					Contact
				</a>
			</nav>
		</div>
	);
};

export default Header;
