import SectionTitle from "./SectionTitle";

interface SkillProps {
	skill: string;
}

const Skill = (props: SkillProps) => {
	return (
		<span className="bg-skill-tag-bg px-4 py-2 rounded-full text-xs text-text-secondary tracking-wide">
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
		"java",
		"rust",
		"docker",
		"git",
	];

	return (
		<section id="about" className="py-16">
			<div className="container mx-auto px-4 md:px-8">
				<SectionTitle title="about" />
				<div className="max-w-xl mx-auto text-center text-base text-about-text leading-loose">
					<p>
						I'm a full-stack developer with a passion for building beautiful and
						functional web applications. I have experience with a variety of
						technologies and I'm always eager to learn new things and take on
						new challenges.
					</p>
					<div className="flex justify-center gap-6 mt-8 flex-wrap">
						{skills && skills.map((skill) => <Skill skill={skill} />)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
