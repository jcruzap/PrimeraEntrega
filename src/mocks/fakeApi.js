import img1 from "../../src/assets/img1.jpeg"
import img2 from "../../src/assets/img2.jpeg"
import img3 from "../../src/assets/img3.jpeg"

export const products = [
    { id: "01", name: "Collar", description: "55cm", img: img1, stock: 5, price: 4500, category: 'collares' },
    { id: "02", name: "Dije", description: "Minnie mouse 45 mm", img: img2, stock: 5, price: 5300, category: 'dijes' },
    { id: "03", name: "Pulsera", description: "pandora", img: img3, stock: 5, price: 6500, category: 'pulseras' }
]

export const getProds = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = products.filter(
            (prod) => prod.category === categoryId
        );
        setTimeout(() => {
            categoryId
                ? resolve(productosFiltrados)
                : resolve(products); //undefined
        }, 3000);
    });
};