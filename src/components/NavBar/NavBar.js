import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const categories = [
    {
        id: 1,
        path: '/',
        name: 'Inicio',
    },

    {
        id: 2,
        path: '/category/collares',
        name: 'Collares',
    },

    {
        id: 3,
        path: '/category/pulseras',
        name: 'Pulseras',
    },

    {
        id: 4,
        path: '/category/proximamente',
        name: 'Proximamente'
    }

]

const NavBar = () => {
    return (
        <nav>
            <h1> - Clara Joyas - </h1>
            <ul>
                {categories.map((category) => (<Link to={category.path} key={category.id}>{category.name}</Link>))}
                <CartWidget />
            </ul>

        </nav>
    )
}

export default NavBar;