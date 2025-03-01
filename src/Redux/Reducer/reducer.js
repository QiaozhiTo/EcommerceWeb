//1. 向store里面存放数据
import allDatas from "../../datas/data_origin"
// 2. 处理数据，接收指令 引入addToCarts
import { addToCarts, Clear_Cart, Decrease_Cart, Increase_Cart ,Remove_Item} from "../Action/actionTypes";
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
                                price: price,
                                unitPrice: price,
                                img,
                                size,
                                color,
                                category,
                                quantity,
                            },
                        ],
                    };
                }
                
            // clear cart case
            case Clear_Cart:
                return {
                    ...state,
                    cartItems: [],
                };
                
            // increase cart 

            case Increase_Cart:
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => 
                        item.id == action.payload.id 
                        ? { ...item, quantity:item.quantity+1, price: item.unitPrice *(item.quantity+1)}
                        : item
                    )
                    
                };
            // decrease cart

            case Decrease_Cart:
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.id === action.payload.id && item.quantity > 1
                        ? {...item, quantity:item.quantity-1, price: item.unitPrice * (item.quantity-1)}
                        :item
                    )
                };

            //  remove item

            case Remove_Item:
                return {
                    ...state,
                    cartItems: state.cartItems.filter(item =>
                        item.id !== action.payload.id)
                };

            default:
                return state; // Return the current state if the action type doesn't match
        }
    };
export default rootReducer
