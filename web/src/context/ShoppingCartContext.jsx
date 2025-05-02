import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({
    shoppingCart: {},
    addToShoppingCart: () => {},
    removeToShoppingCart: () => {}
})

export const ShoppingCartProvider = ({children}) => {
    const [shoppingCart, setShoppingCart] = useState([]);

    const addToShoppingCart = (item) => {
        setShoppingCart([...shoppingCart, item]);
    }

    const removeToShoppingCart = (itemID) => {
        setShoppingCart(shoppingCart.filter(item => item.id !== itemID))
    };

    return (
        <ShoppingCartContext.Provider value={{shoppingCart, addToShoppingCart, removeToShoppingCart}}>
        {children}
        </ShoppingCartContext.Provider>
    )
}

export const useShoppingCartContext = () => useContext(ShoppingCartContext)