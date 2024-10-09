import { addToCarts } from "./actionTypes"
export let addToCart = (parameter)=>({
    type:addToCarts,
    payload:parameter
})