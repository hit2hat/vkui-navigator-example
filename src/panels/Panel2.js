import React from "react";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const Panel2 = ({ id, navigator }) => (
	<Panel id={id}>
		<PanelHeader>
			Панель 2
		</PanelHeader>
		<Group title="Параметры">
			<Div>
				{JSON.stringify(navigator.params)}
			</Div>
		</Group>
		<Group>
			<Div>
				<Button
					size="xl"
					onClick={() => navigator.goBack()}
				>
					Вернуться
				</Button>
			</Div>
		</Group>
	</Panel>
);

export default Panel2;