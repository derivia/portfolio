const Header = () => {
	return (
		<div className="container mx-auto px-4 md:px-8">
			<nav className="relative md:absolute md:top-8 md:right-8 flex justify-center md:justify-end gap-8 mb-8 md:mb-0">
				<a
					href="#about"
					className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm tracking-wider"
				>
					About
				</a>
				<a
					href="#projects"
					className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm tracking-wider"
				>
					Projects
				</a>
				<a
					href="#contact"
					className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm tracking-wider"
				>
					Contact
				</a>
			</nav>
		</div>
	);
};

export default Header;
