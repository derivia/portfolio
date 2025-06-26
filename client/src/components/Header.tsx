const Header = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 py-8">
        <div className="container mx-auto md:px-10 px-10 flex md:justify-end justify-center items-center">
				<ul className="flex gap-12">
					<li>
						<a
							href="#about"
							className="nav-link relative text-gray-600 hover:text-text-primary transition-colors duration-300"
						>
							About
						</a>
					</li>
					<li>
						<a
							href="#skills"
							className="nav-link relative text-gray-600 hover:text-text-primary transition-colors duration-300"
						>
							Skills
						</a>
					</li>
					<li>
						<a
							href="#work"
							className="nav-link relative text-gray-600 hover:text-text-primary transition-colors duration-300"
						>
							Work
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="nav-link relative text-gray-600 hover:text-text-primary transition-colors duration-300"
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
