const Header = () => {
	return (
		<header className="sticky top-0 z-50 bg-background/70 backdrop-blur-md border-b border-border-color">
			<nav className="container mx-auto flex justify-between items-center p-4">
				<a href="/" className="text-2xl font-bold text-text-primary">
					Lorrran
				</a>
				<ul className="flex space-x-8">
					<li>
						<a
							href="#about"
							className="text-text-secondary hover:text-accent transition-colors duration-300"
						>
							About
						</a>
					</li>
					<li>
						<a
							href="#projects"
							className="text-text-secondary hover:text-accent transition-colors duration-300"
						>
							Projects
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="text-text-secondary hover:text-accent transition-colors duration-300"
						>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
