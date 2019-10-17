import React from "react";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const Panel1 = ({ id, navigator }) => {
	const showSpinner = () => {
		navigator.showLoader();
		setTimeout(() => navigator.hideLoader(), 2500);
	};

	const loadData = () => {
		navigator.showLoader();
		fetch("https://api.github.com/repos/hit2hat/vkui-navigator")
			.then((result) => result.json())
			.then((result) => {
				navigator.go("panel2", {
					owner: result.owner && result.owner.login,
					description: result.description
				});
			})
			.catch(() => navigator.hideLoader())
	};

	return (
		<Panel id={id}>
			<PanelHeader>
				VKUI Navigator
			</PanelHeader>
			<Group title="Основы навигации">
				<Div style={{ display: "grid", gridRowGap: "10px" }}>
					<Button
						size="xl"
						onClick={() => navigator.go("panel2")}
					>
						Перейти на панель 2
					</Button>
					<Button
						size="xl"
						onClick={() => navigator.go("panel2", { id: "someid", data: [ 0, 1, 2 ] })}
					>
						Перейти на панель 2 + параметры
					</Button>
					<Button
						size="xl"
						onClick={loadData}
					>
						Перейти на панель 2 + загрузка данных
					</Button>
					<Button
						size="xl"
						onClick={showSpinner}
					>
						Показать спиннер (исчезнет сам)
					</Button>
				</Div>
			</Group>
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
};

export default Panel1;