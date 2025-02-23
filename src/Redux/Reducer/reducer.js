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
    let rootReducer = (state = product, action) => {
        switch (action.type) {
            case addToCarts:
                // Extract product details from the action payload
                const { id, parameter, name, brand, desc, price, img, size, color, category, quantity } =
                    action.payload;
    
                // Check if an item with the same `parameter`, `size`, and `color` already exists in the cart
                const existingItem = state.cartItems.find(
                    (item) =>
                        item.parameter === parameter &&
                        item.size === size &&
                        item.color === color
                );
    
                if (existingItem) {
                    // If the item exists, update its quantity
                    return {
                        ...state,
                        cartItems: state.cartItems.map((item) =>
                            item.parameter === parameter &&
                            item.size === size &&
                            item.color === color
                                ? { ...item, quantity: item.quantity + quantity }
                                : item
                        ),
                    };
                } else {
                    // If the item does not exist, add it to the cart
                    return {
                        ...state,
                        cartItems: [
                            ...state.cartItems,
                            {
                                id,
                                parameter,
                                name,
                                brand,
                                desc,
                                price,
                                img,
                                size,
                                color,
                                category,
                                quantity,
                            },
                        ],
                    };
                }
    
            default:
                return state; // Return the current state if the action type doesn't match
        }
    };
export default rootReducer

// let rootReducer = (state = product, action) => {
//     switch (action.type) {
//         case addToCarts:
//             // Find the product
//             const foundProduct = state.products.find(
//                 (product) => String(product.parameter) === String(action.payload)
//             );

//             // If product is not found, log an error and return current state
//             if (!foundProduct) {
//                 console.error(`Product with parameter ${action.payload} not found.`);
//                 return state;
//             }

//             // Destructure product properties
//             const { id, name, brand, desc, price, img, size, color, parameter, category } = foundProduct;

//             // Check if the product already exists in the cart
//             const existingItem = state.cartItems.find(
//                 (item) => String(item.parameter) === String(parameter)
//             );

//             if (existingItem) {
//                 // Update quantity if product exists
//                 return {
//                     ...state,
//                     cartItems: state.cartItems.map((item) =>
//                         item.parameter === parameter
//                             ? { ...item, quantity: item.quantity + 1 }
//                             : item
//                     ),
//                 };
//             } else {
//                 // Add product to cart if it doesn't exist
//                 return {
//                     ...state,
//                     cartItems: [
//                         ...state.cartItems,
//                         {
//                             id,
//                             name,
//                             brand,
//                             desc,
//                             price,
//                             img,
//                             size,
//                             color,
//                             parameter,
//                             category,
//                             quantity: 1,
//                         },
//                     ],
//                 };
//             }

//         default:
//             return state; // Return current state if action type doesn't match
//     }
// };
// export default rootReducer

// //1. 向store里面存放数据
// import allDatas from "../../datas/data_origin"
// // 2. 处理数据，接收指令 引入addToCarts
// import { addToCarts } from "../Action/actionTypes";
// let datas = allDatas()
// // 定义数据包含了所有的内容，1.所有的数据，2.购物车里面的数据
// let product = {
//     products: datas,
//     cartItems: []
// }
// // reducer 是一个函数,通过参数的形式携带数据存放到store里面，state ,action
// let rootReducer = (state = product, action) => {
//     //     指令是一个确定值
//     switch (action.type) {
//         case addToCarts:
//             // js操作
//             // 解构商品的属性
//             let {id,name,brand,desc,price,img,size,color,parameter,category} = state.products.find((product)=>product.parameter===action.payload)
//             let existingItem = state.cartItems.find((item)=>item.parameter ===parameter)
//             if(existingItem){
//             //    如果存在该数据
//             return{
//                 ...state,cartItems:state.cartItems.map((item)=>item.parameter===parameter?{...item,quantity:item.quantity+1}:item)
//             }
//             }else{
//                 // 如果没有该数据，添加至购物车
//                 return{
//                     ...state,cartItems:[...state.cartItems,{id,name,brand,desc,price,img,size,color,parameter,category,quantity:1}]
//                 }
//             }
//         default:
//                 return state
//                 // reduce
//     }
// }
// export default rootReducer