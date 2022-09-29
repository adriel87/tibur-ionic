# instalacion

```bash
npm i
```

renombra el archivo .env.example a .env y establece los valores necesarios para entorno

ejemplo de como deberia de quedar
```env
    DB_HOST=localhost
    DB_PORT=13306
    DB_DIALECT=mysql
    DB_USER=root
    DB_PASSWORD=1234
    DB_DATABASE=db_cosas
    PORT=8080
```

debes tener una base de datos que cumpla con lo establecido en tus variables de entorno si estas en local simplemente create una base de datos con el nombre que tienes en tu variable `DB_DATABASE`

una vez cumplas estos requisitos

## 👁️ ojo 👁️

si es la primera vez que ejecutas el back usa este comando

```bash
npm run start:force
```

si ya has levantado el back al menos una vez usa el siguiente

```bash
npm start
```

la diferencia entre ambos es que con el primero dejamos la base de datos completamente nueva y sin datos. Y con el otro comando mira si hay cambios en los modelos y actualiza la BBDD pero no borra nuestros datos... ***mucho cuidado con este comando***

### a probar

si todo a ido bien puedes abrir el postman y probar los diferentes end points o bien puedes

### [configurar el front](../front_tibur/cosas/readme.md)
### [volver 🏠](../README.md)