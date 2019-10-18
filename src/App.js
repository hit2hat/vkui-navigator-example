import React from "react";

import { Stack, Page, Tabbar } from "vkui-navigator/dist";

import Panel1 from "./panels/Panel1";
import Panel2 from "./panels/Panel2";
import Panel3 from "./panels/Panel3";

import Modal1 from "./panels/Modal1";
import Modal2 from "./panels/Modal2";

import Icon24Services from "@vkontakte/icons/dist/24/services";
import Icon24Flash from "@vkontakte/icons/dist/24/flash";
import Panel4 from "./panels/Panel4";

const App = () => (
	<Stack
		activePage="main"
		modals={[
			<Modal1 id="modal1"/>,
			<Modal2 id="modal2" title="Название из title"/>
		]}
	>
		<Tabbar
			id="main"
			activeStory="home"
		>
			<Page
				id="home"
				title="Основы"
				activePanel="panel1"
				icon={<Icon24Services/>}
			>
				<Panel1 id="panel1"/>
				<Panel2 id="panel2"/>
			</Page>
			<Page
				id="settings"
				title="Модальные окна"
				activePanel="panel3"
				icon={<Icon24Flash/>}
			>
				<Panel3 id="panel3"/>
			</Page>
		</Tabbar>
		<Page id="page2" activePanel="panel4">
			<Panel4 id="panel4"/>
		</Page>
	</Stack>
);

export default App;

