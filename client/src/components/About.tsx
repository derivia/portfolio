import SectionTitle from "./SectionTitle";

interface SkillProps {
	skill: string;
}

const Skill = (props: SkillProps) => {
	return (
		<span className="bg-skill-tag-bg px-4 py-2 rounded-lg text-md text-text-secondary tracking-wide shadow-sm">
			{String(props.skill[0]).toUpperCase() + String(props.skill).slice(1)}
		</span>
	);
};

const About = () => {
	const skills = [
		"typescript",
		"react",
		"node.js",
		"python",
		"tailwindcss",
		"redis",
		"java",
		"rust",
		"docker",
		"git",
		"postgresql",
		"linux",
	];

	return (
		<section id="about" className="py-20 bg-background-secondary">
			<div className="container mx-auto px-6 md:px-12">
				<SectionTitle title="about" />
				<div className="max-w-2xl mx-auto text-center text-lg text-about-text leading-relaxed">
					<p className="mb-6">
						I'm a full-stack developer with a passion for building beautiful and
						functional web applications. I have experience with a variety of
						technologies and I'm always eager to learn new things and take on
						new challenges.
					</p>
					<div className="flex justify-center gap-4 mt-8 flex-wrap">
						{skills &&
							skills.map((skill) => <Skill key={skill} skill={skill} />)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
