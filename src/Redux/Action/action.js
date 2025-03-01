import { addToCarts ,Increase_Cart,Clear_Cart,Decrease_Cart,Remove_Item }from "./actionTypes"


export let addToCart = (parameter)=>({
    type:addToCarts,
    payload:parameter
});

export let clearCart = () => ({
    type:Clear_Cart,

});

export let increaseCart = (itemId) => ({
    type: Increase_Cart,
    payload: {id:itemId}

});

export let decreaseCart = (itemId) => ({
    type: Decrease_Cart,
    payload: {id:itemId}


});

export let removeItem = (itemId) => ({
    type: Remove_Item,
    payload: {id:itemId}


});