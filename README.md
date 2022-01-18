# CHEKA

Cheka es un acortador de links simple

## API

#### Ruta POST

```http
  POST https://hopetechnologycheka.herokuapp.com/api/link
```

| Parametros | Type     | Descripcion                        |
| :--------- | :------- | :--------------------------------- |
| `url`      | `string` | **Required**. URL a cortar.        |
| `alias`    | `string` | **Required**. Identificador unico. |

#### Ejemplo

```http
  {
  "url" : "https://www.youtube.com/watch?v=h7U8TqOVyxc",
  "alias" : "Sessions48"
  }
```

## Variables de Entorno

Configure las siguientes variables antes de correr de manera local en un archivo .env

`PORT=5000`

`MONGO_URI="mongodb://localhost/links"`

## Instalacion

Para trabajar de manera local

```bash
  1. git clone https://github.com/HopeTechnology/cheka.git
  2. cd cheka
  3. npm install
  4. npm run dev
```
