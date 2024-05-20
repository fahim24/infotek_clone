import Layout from "@/components/layout/Layout";
import Pricing1 from "@/components/sections/Pricing1";
import Link from "next/link";
export default function Pricing() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Pricing">
				<Pricing1 />
			</Layout>
		</>
	);
}
