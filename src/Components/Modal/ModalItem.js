import React from 'react';
import styled from 'styled-components';
import { ModalBtn } from '../Style/Button';

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
`;
const ModalContent = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
`;
const ContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    font-weight: 700;
    font-family: 'Pacifico', cursive;
`;
const PriceName = styled.p`
    margin-left: 30px
`;
const PriceNumber = styled.p`
    margin-right: 53px;
`;

export const ModalItem = ({openItem, setOpenItem, orders, setOrders}) => {
    // закрытие модального окна
    const closeModal = e => {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    };

    const order = {
        ...openItem
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    };

   return (
    <Overlay id="overlay" onClick={closeModal}>
        <Modal>
            <Banner img={openItem.img}/>
            <ModalContent>
                <ContentHeader>
                    <PriceName>{openItem.name}</PriceName>
                    <PriceNumber>{openItem.price.toLocaleString('ru-RU',
                    {style: 'currency', currency: 'RUB'})}</PriceNumber>
                </ContentHeader>
                <ModalBtn onClick={addToOrder}>Добавить</ModalBtn>
            </ModalContent>
        </Modal>
    </Overlay>
   )
}
   