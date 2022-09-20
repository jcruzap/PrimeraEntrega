import React from "react";
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <button>
            <img className="imgCarrito" src='./assets/comprar.png' alt="carrito" />
        </button>
    );
};

export default CartWidget;