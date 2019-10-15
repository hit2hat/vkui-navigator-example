import React from "react";

import { Page } from "vkui-navigator/dist";

import Panel1 from "./panels/Panel1";
import Panel2 from "./panels/Panel2";

import Modal1 from "./panels/Modal1";
import Modal2 from "./panels/Modal2";

const App = () => (
		<Page
			id="test-page"
			homePanel="panel1"
			modals={[
				<Modal1 id="modal1"/>,
				<Modal2 id="modal2" title="Название из title"/>
			]}
		>
			<Panel1 id="panel1"/>
			<Panel2 id="panel2"/>
		</Page>
);

export default App;

