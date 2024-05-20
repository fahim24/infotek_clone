import Layout from "@/components/layout/Layout";
import About2 from "@/components/sections/About2";
import Brand1 from "@/components/sections/Brand1";
import Marque3 from "@/components/sections/Marque3";
import Offer1 from "@/components/sections/Offer1";
import Project2 from "@/components/sections/Project2";
import Team3 from "@/components/sections/Team3";
export default function About() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={2} breadcrumbTitle="About Us">
				<About2 />
				<Offer1 />
				<Project2 />
				<Marque3 />
				<Team3 />
				<Brand1 />
			</Layout>
		</>
	);
}
