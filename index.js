const express = require('express');
const app = express();

// Railway asigna dinámicamente un puerto, usa process.env.PORT
const port = process.env.PORT || 3000;

// Ruta raíz ('/')
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Nueva ruta para devolver 15 usuarios
app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: 'Juan Pérez', age: 28 },
        { id: 2, name: 'María García', age: 32 },
        { id: 3, name: 'Carlos Hernández', age: 45 },
        { id: 4, name: 'Ana López', age: 22 },
        { id: 5, name: 'José Martínez', age: 39 },
        { id: 6, name: 'Laura González', age: 29 },
        { id: 7, name: 'Pedro Fernández', age: 33 },
        { id: 8, name: 'Luisa Ramírez', age: 26 },
        { id: 9, name: 'Ricardo Ortiz', age: 41 },
        { id: 10, name: 'Carolina Torres', age: 27 },
        { id: 11, name: 'Miguel Vázquez', age: 38 },
        { id: 12, name: 'Sofía Castro', age: 21 },
        { id: 13, name: 'Manuel Rojas', age: 35 },
        { id: 14, name: 'Valeria Ruiz', age: 30 },
        { id: 15, name: 'Sebastián Díaz', age: 40 }
    ];
    res.json(users); // Devuelve los usuarios en formato JSON
});

// Nueva ruta para devolver 20 productos de limpieza
app.get('/products', (req, res) => {
    const products = [
        { id: 1, name: 'Jabón líquido', brand: 'Marca A', price: 10.99 },
        { id: 2, name: 'Desinfectante', brand: 'Marca B', price: 5.49 },
        { id: 3, name: 'Escoba', brand: 'Marca C', price: 12.99 },
        { id: 4, name: 'Trapeador', brand: 'Marca D', price: 8.99 },
        { id: 5, name: 'Esponja', brand: 'Marca E', price: 2.99 },
        { id: 6, name: 'Limpiavidrios', brand: 'Marca F', price: 4.99 },
        { id: 7, name: 'Detergente en polvo', brand: 'Marca G', price: 15.49 },
        { id: 8, name: 'Limpiador multiusos', brand: 'Marca H', price: 7.99 },
        { id: 9, name: 'Papel higiénico', brand: 'Marca I', price: 6.49 },
        { id: 10, name: 'Bolsa de basura', brand: 'Marca J', price: 3.99 },
        { id: 11, name: 'Aromatizante', brand: 'Marca K', price: 9.99 },
        { id: 12, name: 'Cloro', brand: 'Marca L', price: 3.49 },
        { id: 13, name: 'Toallas de papel', brand: 'Marca M', price: 4.99 },
        { id: 14, name: 'Guantes de limpieza', brand: 'Marca N', price: 5.99 },
        { id: 15, name: 'Cepillo de fregar', brand: 'Marca O', price: 6.49 },
        { id: 16, name: 'Limpia muebles', brand: 'Marca P', price: 11.99 },
        { id: 17, name: 'Desengrasante', brand: 'Marca Q', price: 8.49 },
        { id: 18, name: 'Suavizante de telas', brand: 'Marca R', price: 7.49 },
        { id: 19, name: 'Limpiador de pisos', brand: 'Marca S', price: 9.49 },
        { id: 20, name: 'Espray desinfectante', brand: 'Marca T', price: 6.99 }
    ];
    res.json(products); // Devuelve los productos en formato JSON
});

// Inicia el servidor en el puerto asignado
app.listen(port, () => {
    console.log(`API running on port ${port}`);
});
