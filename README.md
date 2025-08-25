# API REST con Node.js y Firebase

## Descripcion

API REST para la gestion de productos con Node.js y Express

## Instalacion

1. Clonar el respositorio
2. Intalar dependencias:

```bash 
npm install
```

3. Configurar variables de entorno:

```bash
# Copiar el archivo de ejemplo y completar los datos requeridos
cp .env-example .env
```

Luego editar el archivo `.env` con los valores correspondientes para tu entorno.

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

## Documentacion de la API

### Obtener todos los productos

- **GET** `/products`
- **Descripcion:** Devuelve la lista de todos los productos.
- **Respuesta ejemplo:**

```json
[
    {"id": 1, "name":"Camiseta Deportiva", "price": 150},
    {"id": 2, "name":"Balon Profesional", "price": 170},
]
```

### Buscar productos por nombre

- **GET** `/products/search?name=palabra`
- **Descripcion:** Devuelve los productos cuyo nombre contiene la palabra indicada.
- **Parametros:**
    - `name` (query, requerido): texto a buscar en el nombre del producto.
- **Ejemplo de uso:** `/products/search?name=camiseta`
- **Respuesta de ejemplo:**

```json
[{"id": 1, "name":"Camiseta Deportiva", "price": 150}]
```

### Buscar productos por ID

- **GET** `/products/:id`
- **Descripcion:** Devuelve un producto especifico por su ID.
- **Parametros:**
    - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `/products/1`
- **Respuesta de ejemplo:**

```json
[{"id": 1, "name":"Camiseta Deportiva", "price": 150}]
```

### Crear un producto

- **POST** `/products`
- **Descripcion:** Crea un producto nuevo.
- **Body (JSON):**
```json
    {
        "price": 250,
        "name": "Camisa de lino",
        "category": [
            "ropa"
        ]
    }
```
- **Respuesta de ejemplo:**

```json
{
    "id": "6JF5GXUV62nR3CD0SslP",
    "name": "Camisa de lino",
    "price": 250,
    "category": [
        "ropa"
    ]
}
```

### Eliminar un producto

- **DELETE** `/products/:id`
- **Descripcion:** Elimina un producto por su ID.
- **Parametros:**
    - `id` (path, requerido) ID del producto a eliminar
- **Respuesta de ejemplo:** 204 No Content
