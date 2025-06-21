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
			deployed: "https://sorting.lorrran.com",
			icon: "📊",
		},
		{
			title: "Flashcards",
			description:
				"A modern, responsive flashcards application for spaced repetition learning, built with React and TypeScript.",
			link: "https://github.com/derivia/flashcards",
			deployed: "https://flashcards.lorrran.com",
			icon: "📚",
		},
	];

	return (
		<section id="projects" className="py-20 bg-background">
			<div className="container mx-auto px-6 md:px-12">
				<SectionTitle title="Selected Work" />
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
					{projects.map((project, index) => (
						<Project
							key={index}
							description={project.description}
							icon={project.icon}
							title={project.title}
							link={project.link}
							deployed={project.deployed}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
