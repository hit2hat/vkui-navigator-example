import React from "react";
import ModalCard from "@vkontakte/vkui/dist/components/ModalCard/ModalCard";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";

const Modal1 = ({ id, onClose, navigator }) => (
	<ModalCard
		id={id}
		onClose={onClose}
		icon={<Avatar type="app" src="https://pp.userapi.com/c639222/v639222699/5e1d8/2wtUaVn4Pho.jpg" size={72} />}
		title="Тестовое модальное окно"
		caption={"Параметры: " + JSON.stringify(navigator.params)}
		actions={[
			{
				title: 'Закрыть',
				type: 'primary',
				action: () => navigator.hideModal()
			}
		]}
	/>
);

export default Modal1;