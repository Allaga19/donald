import { useState } from 'react';

const getToppings = toppings => toppings ? toppings.map(item => ({ name: item, checked: false })) : [];

export function useToppings(openItem) {
    const [toppings, setToppings] = useState(openItem.topping ? openItem.topping : getToppings(openItem.toppings));

    const cheсkToppings = index => {
        setToppings(toppings.map((item, i) => {
        const newItem = {...item};
            if (i === index) {
                newItem.checked = !newItem.checked;
            }
            return newItem;
        }));
    }
    return {toppings, cheсkToppings};
}