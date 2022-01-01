import {
    writable,
    derived
} from "svelte/store";
import localCart from "../localCart";
import store from "./globalStore";
// cart
const cart = writable([...localCart]);
// cart total
export const cartTotal = derived(cart, $cart => {
    let total = $cart.reduce((accum, curr) => {
        return (accum += (curr.amount * curr.price));
    }, 0);
    return total.toFixed(2);
});
// local functions
const remove = (id, items) => {
    return items.filter(item => item.id != id);
}
const toggleAmount = (id, items, action) => {
    return items.map(item => {
        let newAmount;
        if (action === "incr") {
            newAmount = item.amount + 1;
        } else if (action === "decr") {
            newAmount = item.amount - 1;
        } else {
            newAmount = item.amount;
        }
        return item.id === id ? {
            ...item,
            amount: newAmount
        } : {
            ...item
        };
    })
}
// global functions
export const removeItem = id => {
    cart.update(storeValue => {
        return remove(id, storeValue);
    })
}
export const increaseAmount = id => {
    cart.update(storeValue => {
        return toggleAmount(id, storeValue, "incr")
    })
}
export const decreaseAmount = (id, amount) => {
    cart.update(storeValue => {
        // let item = storeValue.find(item => item.id === id);
        let cart;
        if (amount === 1) {
            cart = remove(id, storeValue);
        } else {
            cart = toggleAmount(id, storeValue, "decr");
        }
        return [...cart];
    })
}
export const addToCart = product => {
    cart.update(storeValue => {
        const {
            id,
            image,
            title,
            price
        } = product;
        let item = storeValue.find(item => item.id === id);
        let cart;
        if (item) {
            cart = toggleAmount(id, storeValue, 'incr');
        } else {
            let newItem = {
                id,
                image,
                title,
                price,
                amount: 1
            };
            cart = [...storeValue, newItem];
        }
        return cart;
    });

}
// localStorage

export default cart;