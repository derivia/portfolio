export interface ProjectProps {
	code: string;
	deploy?: string;
	title: string;
	description: string;
	tech: string[];
	emoji: string;
}

const Project = (props: ProjectProps) => {
	return (
		<div className="bg-background-primary p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
			<div className="text-5xl mb-4">{props.emoji}</div>
			<h3 className="text-2xl font-semibold text-heading-primary mb-3">
				{props.title}
			</h3>
			<p className="text-lg text-text-secondary leading-relaxed mb-6">
				{props.description}
			</p>
			<div className="flex flex-wrap justify-center gap-3 mb-8">
				{props.tech.map((tag) => (
					<span
						key={tag}
						className="text-sm text-accent bg-skill-tag-bg px-4 py-2 rounded-full uppercase tracking-wider"
					>
						{tag}
					</span>
				))}
			</div>
			<div className="flex flex-col gap-4">
				<a
					href={props.code}
					target="_blank"
					rel="noopener noreferrer"
					className="text-accent font-medium pb-1 border-b border-accent hover:text-text-primary hover:border-text-primary transition-all duration-300"
				>
					View Code →
				</a>
				{props.deploy && (
					<a
						href={props.deploy}
						target="_blank"
						rel="noopener noreferrer"
						className="text-accent font-medium pb-1 border-b border-accent hover:text-text-primary hover:border-text-primary transition-all duration-300"
					>
						View Online →
					</a>
				)}
			</div>
		</div>
	);
};

export default Project;
