interface SectionTitleProps {
	title: string;
	isDark?: boolean;
}

const SectionTitle = (props: SectionTitleProps) => {
	const textColor = props.isDark ? "text-white" : "text-heading-primary";

	return (
		<div className="text-center mb-10">
			<h2 className={`text-4xl font-thin ${textColor}`}>{props.title}</h2>
		</div>
	);
};

export default SectionTitle;
