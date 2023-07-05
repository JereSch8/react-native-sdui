
# Aplicación React Native con Server-Driven UI (SDUI) y Clean Architecture

Este proyecto es un prototipo de una aplicación desarrollada en React Native que implementa la metodología de Server-Driven UI (SDUI). El objetivo principal es demostrar cómo se puede utilizar SDUI para mejorar la eficiencia, flexibilidad y mantenibilidad de una aplicación móvil.

## Descripción

La Server-Driven UI es una metodología que separa la generación de la interfaz de usuario (UI) de la lógica de negocio y los datos. En lugar de enviar vistas o componentes predefinidos desde el servidor al cliente, la SDUI permite que el servidor envíe información estructurada, como JSON, que describe cómo se debe construir la interfaz de usuario en el cliente. Esto facilita la iteración y actualización de la interfaz de usuario sin necesidad de lanzar nuevas versiones de la aplicación.

En este prototipo, se implementará un flujo básico de SDUI en una aplicación React Native. Se utilizarán componentes personalizados y una estructura modular para facilitar la separación de la obtención de datos y la generación de la interfaz de usuario. Se explorarán las mejores prácticas para la comunicación entre el cliente y el servidor, así como la gestión de estados y la actualización dinámica de la interfaz de usuario en respuesta a los cambios en los datos recibidos desde el servidor.

## Características

- Obtención de datos desde un servidor remoto utilizando una API REST.
- Interpretación y transformación de los datos recibidos en componentes de interfaz de usuario dinámicos.
- Actualización de la interfaz de usuario en tiempo real cuando se reciben nuevos datos o cambios desde el servidor.
- Implementación de un sistema de caché local para mejorar el rendimiento y la experiencia del usuario en caso de conexiones intermitentes o lentas.
- Gestión de errores y manejo de situaciones inesperadas durante la obtención y representación de la interfaz de usuario.

## Instalación y configuración

1. Clona este repositorio en tu máquina local.
2. Navega hasta el directorio raíz del proyecto.
3. Ejecuta el comando `npm install` para instalar las dependencias.
4. Ejecuta el comando `npm start` para iniciar la aplicación en el emulador o dispositivo configurado.
