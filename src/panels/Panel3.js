import React from "react";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const Panel3 = ({ id, navigator }) => (
	<Panel id={id}>
		<PanelHeader>
			VKUI Navigator
		</PanelHeader>
		<Group title="Модальные окна">
			<Div style={{ display: "grid", gridRowGap: "10px" }}>
				<Button
					size="xl"
					onClick={() => navigator.showModal("modal1")}
				>
					Показать модальное окно
				</Button>
				<Button
					size="xl"
					onClick={() => navigator.showModal("modal1", { title: "Пример" })}
				>
					Показать модальное окно + параметры
				</Button>
				<Button
					size="xl"
					onClick={() => navigator.showModal("modal2")}
				>
					Авто-генерация Header
				</Button>
			</Div>
		</Group>
	</Panel>
);

export default Panel3;