const Projects = () => {
	const projects = [
		{
			title: "Whisp",
			description:
				"A real-time chat application made with C99 and sockets, featuring private messaging and group chats.",
			link: "https://github.com/derivia/whisp",
			image: "/whisp.png",
		},
		{
			title: "Blog",
			description:
				"A personal blog platform, built with React and Tailwind CSS.",
			link: "https://github.com/derivia/blog",
			image: "/blog.png",
		},
		{
			title: "AlgoVisual",
			description:
				"An interactive algorithm visualizer that helps understand sorting algorithms.",
			link: "https://github.com/derivia/algovisual",
			image: "/algovisual.png",
		},
	];

	return (
		<section id="projects" className="py-20 bg-background-secondary">
			<div className="container mx-auto text-center">
				<h2 className="text-4xl md:text-4xl font-bold mb-12">My Projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
					{projects.map((project, index) => (
						<div
							key={index}
							className="bg-white rounded-xl shadow-lg overflow-hidden text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
						>
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="text-accent text-center font-semibold"
							>
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-48 object-cover inner-shadow"
								/>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-2 text-text-primary">
										{project.title}
									</h3>
									<p className="mb-4 text-text-secondary">
										{project.description}
									</p>
									<span className="text-lg">Click to view project</span>
								</div>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
