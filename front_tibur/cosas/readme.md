# instalacion

navegamos hasta el directorio raiz del proyecto y ejecutamos el siguiente comando

```bash
npm i
```

este proyecto usa  el CLI de IONIC para mas comodidad asi que vamos a instalarlo

```bash
npm install -g @ionic/cli
```
este comando instalara de forma global el CLI, ten en cuenta que depende en que SO estes puede que tengas que dar permisos de ejecucion de scripts

## comprobaciones antes de poner en servicio

- endpoint para nuestro servicio

```javascript
// linea 6
const BASE_API_URL: string ='http://localhost:8080/api/cosa'
```
la variable debe coincidir con el endpoint base que estemos sirviendo desde nuestra API-REST... y es posible que no nos coincida el puerto asi que 👁️

[miralo ya](./src/app/services/cosa.service.ts)

### a probar

ahora vamos a la terminal de nuevo 

```bash
ionic serve
```
esto levantara la app y te llevara al navegador

### [configurar back](../../backend_tibur/readme.md)
### [volver 🏠](../README.md)