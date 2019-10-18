import React from "react";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const Panel4 = ({ id, navigator }) => (
	<Panel id={id}>
		<PanelHeader>
			VKUI Navigator
		</PanelHeader>
		<Group>
			<Group title="Параметры">
				<Div>
					{JSON.stringify(navigator.params)}
				</Div>
			</Group>
			<Div style={{ display: "grid", gridRowGap: "10px" }}>
				<Button
					size="xl"
					onClick={() => navigator.goPage("main")}
				>
					Назад
				</Button>
			</Div>
		</Group>
	</Panel>
);

export default Panel4;