import React from "react";
import Layout from "@/components/layout/Layout";
import Messages from "@/components/elements/Messages";

function Message() {
	return (
		<Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Messages">
			<Messages />
		</Layout>
	);
}

export default Message;
