import Separator from "./Separator";

interface SectionTitleProps {
	title: string;
}
const SectionTitle = (props: SectionTitleProps) => {
	return (
		<h2 className="text-3xl font-normal mb-6 text-center relative">
			{String(props.title[0]).toUpperCase() + String(props.title).slice(1)}
			<Separator />
		</h2>
	);
};

export default SectionTitle;
