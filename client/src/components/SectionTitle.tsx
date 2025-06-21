import Separator from "./Separator";

interface SectionTitleProps {
	title: string;
}
const SectionTitle = (props: SectionTitleProps) => {
	return (
		<h2 className="text-4xl font-semibold mb-6 text-center relative text-heading-primary">
			{String(props.title[0]).toUpperCase() + String(props.title).slice(1)}
			<Separator />
		</h2>
	);
};

export default SectionTitle;
