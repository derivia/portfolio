import Project from "./Project";
import SectionTitle from "./SectionTitle";
import { projects } from "../lib/projects";

const Work = () => {
	return (
		<section id="work" className="py-24 bg-background-secondary">
			<div className="container mx-auto px-10">
				<SectionTitle title="Selected Work" />
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
					{projects.map((project, index) => (
						<Project
							key={index}
							title={project.title}
							description={project.description}
							tech={project.tech}
							code={project.code}
							deploy={project.deploy}
							emoji={project.emoji}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Work;
