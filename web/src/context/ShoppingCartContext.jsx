import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({
    shoppingCart: {},
    cantidad: 0,
    addToShoppingCart: () => { },
    removeFromShoppingCart: () => { },
    decreaseQuantity: () => { },
})

export const ShoppingCartProvider = ({ children }) => {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [cantidad, setCantidad] = useState(0);


    const addToShoppingCart = (item) => {
        setShoppingCart((prevCart) => {
            const existingItem = prevCart.find((producto) => producto.id === item.id)
            if (existingItem) {
                return prevCart.map((producto) => producto.id === item.id ? { ...producto, cantidad: producto.cantidad + 1 } : producto)
            } else {
                return [...prevCart, { ...item, cantidad: 1 }]
            }
        });
        setCantidad(prev => prev + 1)
    }

    const decreaseQuantity = (itemID) => {
        setShoppingCart((prevCart) => {
            const item = prevCart.find((producto) => producto.id === itemID)

            if (item && item.cantidad > 1) {
                return prevCart.map((producto) =>
                    producto.id === itemID ? { ...producto, cantidad: producto.cantidad - 1 } : producto
                )
            } else {
                return prevCart.filter((producto) => producto.id !== itemID)
            }
        })
    }

    const removeFromShoppingCart = (itemID) => {
        setShoppingCart(shoppingCart.filter(item => item.id !== itemID))
    };

    return (
        <ShoppingCartContext.Provider value={{ shoppingCart, addToShoppingCart, removeFromShoppingCart, cantidad, setCantidad, decreaseQuantity }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export const useShoppingCartContext = () => useContext(ShoppingCartContext)