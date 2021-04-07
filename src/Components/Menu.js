import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import { BannerMenu } from './Banner';


const MenuStyled = styled.main`
    backgrount-color: #ccc;
    margin-top: 80px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

export const Menu = ({setOpenItem}) => (
    <MenuStyled>
        <BannerMenu/>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem 
                itemList={dbMenu.burger}
                setOpenItem={setOpenItem}
            />
        </SectionMenu>
        <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem 
                itemList={dbMenu.other}
                setOpenItem={setOpenItem}
            />
        </SectionMenu>
    </MenuStyled>
);