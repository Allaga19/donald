import React from 'react';
import styled from 'styled-components';
import { ModalBtn } from './Buttom';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;
const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    height: 600px;
    display: flex;
	flex-direction: column;
`;
const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
    margin-bottom: 20px; 
`;
const ModalPrice = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 240px;
`;
const PriceName = styled.p`
    font-family: Pacifico;
    font-size: 30px;
    margin-left: 30px
`;
const PriceNumber = styled.p`
    font-family: Pacifico;
    font-size: 30px;
    margin-right: 53px;
`;

export const ModalItem = ({openItem, setOpenItem}) => {
    // закрытие модального окна
    function closeModal(e) {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    if (!openItem) return null;
   return (
    <Overlay id="overlay" onClick={closeModal}>
        <Modal>
            <Banner img={openItem.img}/>
            <ModalPrice>
                <PriceName>{openItem.name}</PriceName>
                <PriceNumber>{openItem.price.toLocaleString('ru-RU',
                {style: 'currency', currency: 'RUB'})}</PriceNumber>
            </ModalPrice>
            <ModalBtn>Добавить</ModalBtn>
        </Modal>
    </Overlay>
   )
}
   