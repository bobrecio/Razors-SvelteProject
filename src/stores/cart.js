import {writable, derived} from "svelte/store";
import localCart from "../localCart";
const cart = writable([...localCart]);

export const cartTotal = derived(cart, $cart => {
    let total = $cart.reduce((accum, curr) => {
        return (accum += (curr.amount * curr.price));
    }, 0);
    return total.toFixed(2);
});

export default cart;