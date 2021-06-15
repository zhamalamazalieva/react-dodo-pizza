import { ADD_TO_CART, REMOVE_FROM_CART, PLUS_ITEM, MINUS_ITEM } from "../types/types";
export const addToCart = () => {
    return {
    type:ADD_TO_CART
    }
}
export const removeFromCart = () => {
    return {
    type:REMOVE_FROM_CART
    }
}

export const minusItem = () => {
    return {
    type:MINUS_ITEM
    }
}
export const plusItem = () => {
    return {
    type:PLUS_ITEM
    }
}


