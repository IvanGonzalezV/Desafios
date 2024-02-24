# Gestor de Productos

Este proyecto consiste en una aplicación de gestión de productos que permite agregar nuevos productos, verificar la disponibilidad de productos por su código, y obtener una lista de todos los productos disponibles. Se han realizado modificaciones para integrar la persistencia de datos utilizando el módulo fs de Node.js.

## Cambios Realizados

### Actualización del archivo package.json

Se ha agregado la propiedad `"type": "module"` al archivo `package.json` para indicar a Node.js que debe interpretar el código como módulos ES6.

### Integración de FileSystem (fs)

Se ha integrado el módulo `fs` de Node.js en la clase `ProductManager` para manejar la persistencia de datos. Se ha agregado lógica para cargar, guardar y actualizar los productos en un archivo JSON.

### Corrección de errores

Se han corregido varios errores relacionados con la carga y guardado de productos, así como también con la creación del archivo de productos.

## Uso

Para ejecutar la aplicación, utiliza el comando `npm start`. Al iniciar la aplicación, se mostrará una lista de productos existentes, se agregarán nuevos productos, se mostrarán los productos nuevamente con los cambios y se buscará un producto por su ID.

### Resultado al ejecutar `npm start`:
clase_04@1.0.0 start

node entrega02.js

productos: [
{
id: 1,
title: 'Example Product',
description: 'This is an Example Product',
price: 200,
thumbnail: 'Pending Link',
code: 'sell_0122',
stock: 16
},
{
id: 2,
title: 'Otro Producto',
description: 'Este es un Nuevo Producto',
price: 120,
thumbnail: 'Otra Imagen',
code: 'sell_0122',
stock: 10
}
]
Producto Agregado Correctamente.
Productos: [
{
id: 1,
title: 'Example Product',
description: 'This is an Example Product',
price: 200,
thumbnail: 'Pending Link',
code: 'sell_0122',
stock: 16
},
{
id: 2,
title: 'Otro Producto',
description: 'Este es un Nuevo Producto',
price: 120,
thumbnail: 'Otra Imagen',
code: 'sell_0122',
stock: 10
},
{
id: 3,
title: 'Example Product',
description: 'This is an Example Product',
price: 200,
thumbnail: 'Pending Link',
code: 'sell_0122',
stock: 16
}
]
Producto Agregado correctamente.
Producto Encontrado por ID. {
id: 1,
title: 'Example Product',
description: 'This is an Example Product',
price: 200,
thumbnail: 'Pending Link',
code: 'sell_0122',
stock: 16
}

## Estructura del Proyecto

- **entrega02.js**: Archivo principal que contiene la lógica de la aplicación.
- **ProductManager.js**: Clase que gestiona los productos.
- **Productos.json**: Archivo donde se almacenan los productos.
- **README.md**: Este archivo que proporciona información sobre el proyecto.

## Licencia

Este proyecto está bajo la Licencia MIT.


