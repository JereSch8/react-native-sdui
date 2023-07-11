# Aplicación React Native con Server-Driven UI (SDUI) y Clean Architecture

Existen multiples formas de implementar SDUI, en esta rama veremos la implementación más sencilla, que consiste en recibir tanto los **datos de UI** como los **componentes de UI** en el mismo JSON.

## Principales Ventajas y Desventajas

| Ventajas  | Desventajas |
| ------------- | ------------- |
| ✔️ Implementación sencilla  | ❌ Paquete de datos mas grande  |
|   | ❌ Imposibilidad de actualizar solo los datos o solo componentes  |

## Funcionamiento

Para que lo podamos notar de manera más sencilla, vamos a ver paso a paso como podriamos realizar la implementación.

#### Primer paso: 
Comenzamos desde el *Design System* (DS) definimos los componentes que van a existir en nuestra aplicación. 
Por ejemplo: Vamos a nuestro figma y creamos un nuevo botón llamado **MyCustomButton**.

![Screenshot step1](https://github.com/JereSch8/react-native-sdui/assets/58143759/02ce20d3-782a-4a4d-b0d7-fdb57bf5eead)

#### Segundo paso: 
Tomamos esos elementos del DS y los construímos en el front-end.
Por ejemplo si estamos utilizando Android lo construimos con Jetpack Compose o con SwiftUI en el caso de iOS o en el framework correspondiente a la tecnología que estemos utilizando, en este caso React-Native.

![Screenshot step2](https://github.com/JereSch8/react-native-sdui/assets/58143759/5ddc8c5f-8454-4f72-a8b7-c701f5866182)

#### Tercer paso: 
Realizamos la petición al back-end para que nos devuelva los elementos a dibujar.
Por ejemplo realizamos una petición HTTP a tu endpoint (por ejemplo: *https://localhost/home*) la cual nos devuelve el siguiente JSON:

![Screenshot step3](https://github.com/JereSch8/react-native-sdui/assets/58143759/d897283b-0fef-43cd-905c-5d4b98005ca8)


\* (En este caso por simplificar, cambiamos la peticion HTTP, por un JSON guardado de manera local en *src/data/client* ) 


#### Cuarto paso:
Mapeamos esos elementos que vienen del back-end a los componentes propios del front-end.
Por ejemplo, para hacer el mapeo, lo haríamos de una forma similar a la siguiente:

![Screenshot step4](https://github.com/JereSch8/react-native-sdui/assets/58143759/4a0253c8-b291-4044-aba5-4c768efae110)


Acá lo que estamos haciendo es tomar el *vector de componentes* que vienen en el JSON que nos provee el backend y lo convertimos en un nuevo *vector de widgets* propios de react-native que están listos para ser pintados.

#### Quinto paso:
Mapeamos las acciones que pueden realizar los componentes, en este caso el botón. Las acciones son funciones preprogramadas para que el backend le pueda indicar a los componentes pintados que deben hacer, en general, la accion que se ejecute deberia ser simple.

![Screenshot step5](https://github.com/JereSch8/react-native-sdui/assets/58143759/4ac4cb4c-7257-4a9b-a733-22d1bd6628f1)


#### Sexto paso:
dibujamos el componente en la pantalla.

![Screenshot step6](https://github.com/JereSch8/react-native-sdui/assets/58143759/9dccee47-77a1-42ad-af70-b82da7de2838)

\* NOTA: Para quitar complejidad se simplifico la llamada en la captura de pantalla para que se entienda la idea, pero la implementación real utiliza observers, revisar el fichero `src/presentation/screens/home/HomeScreen.tsx` para ver como se hace la llamada realmente.

## Diagrama

El camino completo nos quedaria de la siguiente manera:

![Screenshot diagram](https://github.com/JereSch8/react-native-sdui/assets/58143759/45fde9ea-5a37-4192-893f-11daba75b246)


A la izquierda podemos ver el esquema del JSON utilizado, puedes probar cambiar el JSON que se llama en el ***homeClient.ts*** ubicado en la carpeta *src/data/client* `const jsonData = JSON.stringify(jsonResponseUI1)` por el `jsonResponseUI2` ó tambien puedes crear tus propios JSON para ver como cambia la UI.

## Deployment / Despliegue

A continuación, encontraras una guía detallada paso a paso de como hacer para desplegar el proyecto de react-native.

#### Paso 0: Clonar el repositorio


```bash
  git clone https://github.com/JereSch8/react-native-sdui.git
```
#### Paso 1: Instalar dependencias

0. Navega al directorio raíz del proyecto clonado utilizando el siguiente comando:

```bash
  cd <DIRECTORIO_DEL_PROYECTO>
```

Reemplaza <DIRECTORIO_DEL_PROYECTO> con el nombre del directorio del proyecto clonado.

1. Muevete a ésta rama `sdui-all-in-one`:

```bash
  git checkout sdui-all-in-one
```

2. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
  npm install
```

Este comando instalará todas las dependencias necesarias que se encuentran en el archivo `package.json`.

#### Paso 2: Ejecutar el proyecto

0. Chequea que la ruta sea la raiz del proyecto `<DIRECTORIO_DEL_PROYECTO>`

1. Asegúrate de tener un emulador de Android o iOS configurado y en funcionamiento, o conecta un dispositivo físico a tu computadora.

2. Ejecuta el siguiente comando para lanzar el metro:

```bash
  npx react-native start
```

Este comando abrira la herramienta necesaria para que puedas ejecutar la aplicación en el dispositivo seleccionado. En este punto tienes 2 opciones, por un lado puedes presionar las letras que te sugiere el Metro `'a' para ejecutar en dispositivos Android` y `'i' para ejectuar en dispositivos iOS` ó seguir con el paso 3.

3. En una nueva terminal que se encuentre tambien en la raiz del proyecto `<DIRECTORIO_DEL_PROYECTO>`. Ejecuta uno de los siguientes comandos según la plataforma en la que deseas ejecutar el proyecto:

* Para ejecutar en Android:

```bash
  npx react-native run-android
```

* Para ejecutar en iOS:

```bash
  npx react-native run-ios
```

Estos comandos compilarán y ejecutarán la aplicación en el emulador o dispositivo físico.


Esto es todo, en este punto deberias tener la aplicación corriendo!


## Siguiente paso

Si para este punto pudiste comprender toda la idea detras de ésta metodologia, te puedes dirigir a la rama [master](https://github.com/JereSch8/react-native-sdui/tree/main) de este mismo proyecto para ver una implementación mas compleja pero mas eficiente en terminos de datos consumidos y de renderizado. Encontraras una aplicación funcionando con SDUI la cual posee los ***datos de UI*** separados de los ***componentes de UI***. 
