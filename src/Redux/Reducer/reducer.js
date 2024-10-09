//1. 向store里面存放数据
import allDatas from "../../datas/data_origin"
// 2. 处理数据，接收指令 引入addToCarts
import { addToCarts } from "../Action/actionTypes";
let datas = allDatas()
// 定义数据包含了所有的内容，1.所有的数据，2.购物车里面的数据
let product = {
    products: datas,
    cartItems: []
}
// reducer 是一个函数,通过参数的形式携带数据存放到store里面，state ,action
let rootReducer = (state = product, action) => {
    //     指令是一个确定值
    switch (action.type) {
        case addToCarts:
            // js操作
            // 解构商品的属性
            let {id,name,brand,desc,price,img,size,color,parameter,category} = state.products.find((product)=>product.parameter==action.payload)
            let existingItem = state.cartItems.find((item)=>item.parameter ==parameter)
            if(existingItem){
            //    如果存在该数据
            return{
                ...state,cartItems:state.cartItems.map((item)=>item.parameter==parameter?{...item,quantity:item.quantity+1}:item)
            }
            }else{
                // 如果没有该数据，添加至购物车
                return{
                    ...state,cartItems:[...state.cartItems,{id,name,brand,desc,price,img,size,color,parameter,category,quantity:1}]
                }
            }
        default:
                return state
                // reduce
    }
}
export default rootReducer