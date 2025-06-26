import SectionTitle from "./SectionTitle";
import { skillsData } from "../lib/skills";

const Skills = () => {
	return (
		<section id="skills" className="py-24 bg-background-secondary">
			<div className="container mx-auto px-10">
				<SectionTitle title="Skills" />
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
					{skillsData.map((category, index) => (
						<div
							key={index}
							className="text-center p-6 bg-background-primary rounded-lg shadow-md flex flex-col items-center"
						>
							<h3 className="text-lg font-medium text-heading-primary mb-4 uppercase tracking-wider border-b-2 border-accent pb-2">
								{category.title}
							</h3>
							<ul className="text-text-secondary space-y-2">
								{category.skills.map((skill) => (
									<li
										key={skill}
										className="py-1 hover:text-accent transition-colors duration-300"
									>
										{skill}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
