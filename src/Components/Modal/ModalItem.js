import React from 'react';
import styled from 'styled-components';
import { ModalBtn } from '../Style/Button';
import { CountItem } from './CountItem';
import { UseCount } from '../Hooks/UseCount';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Toppings } from '../Modal/Toppings';
import { Choices } from '../Modal/Choices';
import { useToppings } from '../Hooks/useToppings';
import { useChoices} from '../Hooks/useChoices';


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

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const counter = UseCount();
    const toppings = useToppings(openItem);
    const choices = useChoices(openItem);
    const isEdit = openItem.index > -1;

    // закрытие модального окна
    const closeModal = e => {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    };
    // заказы
    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice,
    };
    const editOrder = () => {
        const newOrders = [ ...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
    }

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
                    <PriceNumber>{formatCurrency(openItem.price)}</PriceNumber>
                </ContentHeader>
                <CountItem {...counter}/>
                {openItem.toppings && <Toppings {...toppings} />}
                {openItem.choices && <Choices {...choices} openItem={openItem} />}
                <TotalPriceItem>
                    <span>Цена:</span>
                    <span>{formatCurrency(totalPriceItems(order))}</span>
                </TotalPriceItem>
                <ModalBtn 
                    onClick={isEdit ? editOrder : addToOrder}
                    disabled={order.choices && !order.choice}
                    >Добавить</ModalBtn>
            </ModalContent>
        </Modal>
    </Overlay>
   )
}
   