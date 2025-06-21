export interface ProjectProps {
	link: string;
	icon: string;
	title: string;
	description: string;
	deployed?: string;
}

const Project = (props: ProjectProps) => {
	return (
		<div className="bg-project-card-bg border border-border rounded-xl p-8 transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg">
			<div className="w-16 h-16 project-icon-gradient rounded-full mx-auto mb-6 flex items-center justify-center text-3xl shadow-sm">
				{props.icon}
			</div>
			<h3 className="text-xl font-semibold mb-3 text-text-primary text-center">
				{props.title}
			</h3>
			<p className="text-base text-text-secondary mb-6 leading-relaxed text-center">
				{props.description}
			</p>
			<a
				href={props.link}
				target="_blank"
				rel="noopener noreferrer"
				className="text-project-link text-base font-medium tracking-wide hover:underline text-center block"
			>
				View Code →
			</a>
			{props.deployed && (
				<a
					href={props.deployed}
					target="_blank"
					rel="noopener noreferrer"
					className="text-project-link text-base font-medium tracking-wide hover:underline text-center block"
				>
					View Online →
				</a>
			)}
		</div>
	);
};

export default Project;
