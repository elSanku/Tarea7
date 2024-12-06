/*Gestor de Inventario de una Tienda

Tienes un array de productos de una tienda, cada uno con información sobre su nombre, 
categoría, precio, cantidad en inventario y descuento. Tu tarea es trabajar con este 
inventario utilizando programación funcional y estructuras de control.
*/

console.log("---------------Ejercicio 1---------------");
/*Filtrar Productos con Descuento: Usa filter para obtener un nuevo array con los 
productos que tienen un descuento aplicado (es decir, discount > 0).*/
const products = [
    { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
];

// Filtrar productos con descuento mayor a 0
let productsFilter = products.filter(function(product) {
    return product.discount > 0; 
});

// Mostrar los productos filtrados
for (let i = 0; i < productsFilter.length; i++) {
    console.log(productsFilter[i]);
}
console.log("---------------Ejercicio 2---------------");
/*Calcular el Precio Final con Descuento: Usamos map para calcular el precio final
de los productos que tienen descuento y creamos un nuevo array que incluya el priceAfterDiscount.*/

let productsWithDiscount = productsFilter.map(function(product) {
    // Calculamos el precio después del descuento
    const priceAfterDiscount = product.price - (product.price * product.discount / 100);

    // Creamos un nuevo objeto con el precio con descuento y lo devolvemos
    let newProduct = {
        name: product.name,
        category: product.category,
        price: product.price,
        stock: product.stock,
        discount: product.discount,
        priceAfterDiscount: priceAfterDiscount // Añadimos la propiedad 'priceAfterDiscount'
    };

    return newProduct; 
});

// Mostrar los productos con el precio final con descuento
for (let i = 0; i < productsWithDiscount.length; i++) {
    console.log(productsWithDiscount[i]);
}

console.log("---------------Ejercicio 3---------------");
/*Identificar Productos con Stock Bajo: Usa un bucle para identificar 
los productos con menos de 5 unidades en inventario y guárdalos en un array nuevo.*/

let productsStock = products.filter(function(product) {
    return product.stock < 5; // Devolver solo los productos que tengan menos de 5 en Stock
});
for (let i = 0; i < productsStock.length; i++) {
    console.log(productsStock[i]);
}

console.log("---------------Ejercicio 4---------------");
/*Actualizar el Stock de un Producto: Crea una función que reciba
 el nombre de un producto y una cantidad a agregar. Usa un try...catch 
 para verificar si el producto existe en el array. Si existe, incrementa su stock; si no, lanza un error.*/
 
 function actualizarStock(nombreProd, stockProd) {
    try {
        // Buscar el producto por nombre
        let product = products.find(function(p) {
            return p.name === nombreProd;
        });

        // Si el producto no existe, lanzamos un error
        if (!product) {
            throw new Error("El producto no existe en el inventario.");
        }

        // Si el producto existe, sumamos la cantidad al stock
        product.stock += stockProd;
        console.log(`Stock actualizado para ${nombreProd}. Nuevo stock: ${product.stock}`);
    } catch (error) {
        // Capturamos y mostramos cualquier error
        console.log(error.message);
    }
}
//Se prueba con Escritorio para que de error.

actualizarStock("Escritorio",10);

console.log("---------------Ejercicio 5---------------");

/*Resumen por Categorías: Usa un bucle para contar cuántos productos hay en cada categoría 
(electrónica, hogar, alimentos) y devuelve un objeto con este resumen.*/

function getCategorySummary() {
    let summary = {}; // Creamos un objeto vacío para almacenar el conteo por categoría

    // Recorremos el array de productos
    for (let i = 0; i < products.length; i++) {
        let category = products[i].category; // Obtenemos la categoría del producto

        // Si la categoría ya existe en el objeto summary, incrementamos el contador
        if (summary[category]) {
            summary[category]++;
        } else {
            // Si la categoría no existe, la inicializamos con 1
            summary[category] = 1;
        }
    }

    return summary; // Devolvemos el objeto con el resumen por categoría
}

// Llamamos a la función y mostramos el resumen por categorías
let categorySummary = getCategorySummary();
console.log(categorySummary);