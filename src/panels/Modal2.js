import React from "react";
import ModalPage from "@vkontakte/vkui/dist/components/ModalPage/ModalPage";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const Modal1 = ({ id, onClose, header, navigator }) => (
	<ModalPage
		id={id}
		header={header}
		onClose={onClose}
	>
		<Div>
			<h1>Базовый Header для модальных окон генерируется автоматически</h1>
		</Div>
	</ModalPage>
);

export default Modal1;