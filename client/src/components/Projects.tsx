import Project from "./Project";
import SectionTitle from "./SectionTitle";

const Projects = () => {
	const projects = [
		{
			title: "Whisp",
			description:
				"A real-time chat app in C99 using sockets, with private and group messaging features.",
			link: "https://github.com/derivia/whisp",
			icon: "💬",
		},
		{
			title: "Blog",
			description:
				"A personal blogging platform built with React and Tailwind CSS, with authentication",
			link: "https://github.com/derivia/blog",
			icon: "📝",
		},
		{
			title: "AlgoVisual",
			description:
				"An interactive visualizer that demonstrates how sorting algorithms work step by step.",
			link: "https://github.com/derivia/algovisual",
			icon: "📊",
		},
	];

	return (
		<section id="projects" className="py-16">
			<div className="container mx-auto px-4 md:px-8">
				<SectionTitle title="Selected Work" />
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
					{projects.map((project, index) => (
						<Project
							key={index}
							description={project.description}
							icon={project.icon}
							title={project.title}
							link={project.link}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
