import React from "react";

import { Stack, Page } from "vkui-navigator/dist";

import Panel1 from "./panels/Panel1";
import Panel2 from "./panels/Panel2";
import Panel3 from "./panels/Panel3";

import Modal1 from "./panels/Modal1";
import Modal2 from "./panels/Modal2";

const App = () => (
	<Stack
		activePage="page1"
		modals={[
			<Modal1 id="modal1"/>,
			<Modal2 id="modal2" title="Название из title"/>
		]}
	>
		<Page
			id="page1"
			activePanel="panel1"
		>
			<Panel1 id="panel1"/>
			<Panel2 id="panel2"/>
		</Page>
		<Page
			id="page2"
			activePanel="panel3"
		>
			<Panel3 id="panel3"/>
		</Page>
	</Stack>
);

export default App;

