# Programacion Movil Changelog

## Estudiantes:
[Johan Dahlbokum: @JDN2377](https://github.com/JDN2377)<br>
[Benjamin Paredes: @BenjaminWuff](https://github.com/BenjaminWuff)<br>
[Kevin Aguirre: @keaguirre](https://github.com/keaguirre)


# To Do:
- [ ] Migrar la geolocalización a un servicio.
- [ ] Implementar update de imagen de perfil
- [ ] Correccion de modal con cancelar, al registrar el auto y registrarse conductor, bajar el modal.
- [ ] Correccion de modal con cancelar, al actualizar el perfil de un pasajero y/o conductor, bajar el modal.
- [ ] Refactorizar, ClimaApi para quitar la carga cada vez que se cambia de página.
- [ ] Refactorizar, ConversorApi para que suba la img solo con el identificador de su correo.
- [ ] Refactorizar, las url del servicio adminusuario a Environments.
- [ ] Conductor sidePage
    - [ ] Crear pagina perfil para conductor(que pueda visualizar la data del auto(Stand by: actualizar))
    - [ ] Crear pagina de viaje para el conductor
- [ ] Crear pagina de viaje para pasajero y lógica de los mockups [Mockup Imagen](https://cdn.discordapp.com/attachments/707842934417915946/1049823609914396732/New_Wireframe_1.png)
- [ ] Bcrypt para contraseñas.


## 07/oct [@keaguirre](https://github.com/keaguirre)
- Ajuste de estilos a enlaces en login y registro
- Ajuste de lugar de los formularios en Login y registro
- Cambio los href por routerLink de angular
- Ajuste de negritas en Login y registro
- 404 Funcional

## 10/10 [@keaguirre](https://github.com/keaguirre)
- Agregue un "Soy conductor" al login
- [x] Agregar login para conductor
- [x] Cambiar la font a light en el "Soy conductor"

## 11/10 [@keaguirre](https://github.com/keaguirre)
- Agregue un login para conductor y un home para conductores

## 17/10 [@keaguirre](https://github.com/keaguirre)
- Agregado finalmente el toggle para ver y esconder la password en ambos login
    - [x] Ojito show/hide password
- ERROR: Tab 'perfil' item lanza a 404 en vez de llevar al login

## 21/10 [@keaguirre](https://github.com/keaguirre)
- Error tab perfil fixed, y hyperlink de conversor que llevaba a inicio en otra pestaña fixed
- Agregada la nueva font, se esta usando Montserrat
- [x] Cambiar Coversor por Conversor: fixed solo los titulos, las referencias y el archivo sigue como coversor
- [x] Hacer funcionar las nuevas fonts
- Arreglados los botones iconos del home

## 10/11 [@keaguirre](https://github.com/keaguirre)
-Comienza el desarrollo del backend de django
-Comienza el consumo de api clima y divisas
-Se crean servicios de clima y conversor

## 13/11 [@BenjaminWuff](https://github.com/BenjaminWuff) & [@keaguirre](https://github.com/keaguirre)
- [x] Consumir api del clima con geolocalizacion
- Arreglos en el components module
- Arreglo en el global css font(error al escribir monstserrat)
-Correccion de logo en modo no movil para poder hacer usable la app

## 23/11 [@keaguirre](https://github.com/keaguirre)
- [x] Crear Django Backend
- [x] Que el metodo diferencie entre usuarios normales y conductores para
redirigirlos a su propio home segun quien logee.
- terminado el backend con su apiRest, consulta, registro y login.

## 23/11 [@keaguirre](https://github.com/keaguirre)
- [x] Agregar boton hamburguesa en inicio conductor.

## 25/11 [@JDN2377](https://github.com/JDN2377)
- [x] Consumir api de conversion de divisas
- Comieza el desarrollo de la Camara con Firebase (Rama Camara)
- Comienza desarrollo de Sesiones (Rama Sesiones)

## 25/11 Ajustes entre merge [@keaguirre](https://github.com/keaguirre)
- Error de edit de merge
- Quitados los console log del componente clima

## 26/11 LocalStorage [@keaguirre](https://github.com/keaguirre)
- npm install @ionic/storage-angular

## 28/11 [@keaguirre](https://github.com/keaguirre) & [@JDN2377](https://github.com/JDN2377)
- Creado el guard llamado authGuard
- Sesiones creadas
- Protección de rutas mediante guard
- Botón de logout funcional
- Funcionalidad de la cámara
- [x] Subida y carga de imagenes mediante firebase
- [x] Agregar el usuario al sidebar y lo almacene(LocalStorage/CurrentSession?)