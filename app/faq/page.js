import Accordion1 from "@/components/elements/Accordion1";
import Layout from "@/components/layout/Layout";
import Faq2 from "@/components/sections/Faq2";
export default function Faq() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Faq">
				<div className="section-padding">
					<Faq2 />
				</div>
			</Layout>
		</>
	);
}
