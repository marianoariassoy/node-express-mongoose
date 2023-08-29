# CRUD con Node, Express y Mongoose 👋

Como una manera más sencilla se puede utilizar la extensión para VSC, REST Client Api, para testear los endpoints desde los archivos en el directorio "api" dentro de "src".
Antes de esto:

## Instrucciones

- Clonar el repositorio => git clone https://github.com/marianoariassoy/node-express-mongoose
- Instalar las dependencias => npm i
- Correr la app => npm run dev

## Base URL

La URL base para acceder a la API es: `http://localhost:8080`

## Endpoints

### Muestra todos los usuarios

**GET** http://localhost:8080/api/users

### Agrega un usuario

**POST** http://localhost:8080/api/users

```json
{
  "name": "John Mayer",
  "email": "email@email.com"
}
```

### Actualiza un usario

**PUT** http://localhost:8080/api/users/:id

```json
{
  "name": "Elon Musk",
  "email": "elonmusk@email.com"
}
```

### Elimina un usuario

**DELETE** http://localhost:8080/api/users/:id

---

### Muestra todos los productos

**GET** http://localhost:8080/api/products

### Agrega un producto

**POST** http://localhost:8080/api/products

```json
{
  "name": "Product 1",
  "category": "category",
  "price": 100,
  "stock": 10,
  "image": "100"
}
```

### Actualiza un producto

**PUT** http://localhost:8080/api/products/:id

```json
{
  "stock": 2
}
```

### Elimina un producto

**DELETE** http://localhost:8080/api/products/:id
