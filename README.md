
# Aplicación React Native con Server-Driven UI (SDUI) y Clean Architecture

Este proyecto es un prototipo de una aplicación desarrollada en React Native que implementa la metodología de Server-Driven UI (SDUI). El objetivo principal es demostrar cómo se puede utilizar SDUI para mejorar la eficiencia, flexibilidad y mantenibilidad de una aplicación móvil.

En este prototipo, se implementará un flujo de SDUI en una aplicación React Native. Se utilizarán componentes personalizados y una estructura modular para facilitar la separación de la obtención de datos y la generación de la interfaz de usuario. Se explorarán las prácticas recomendadas para la gestión de estados y la actualización dinámica de la interfaz de usuario en respuesta a los cambios en los datos recibidos desde el servidor.

### Características

- Interpretación y transformación de los datos recibidos en componentes de interfaz de usuario dinámicos.
- Actualización de la interfaz de usuario en tiempo real cuando se reciben nuevos datos o cambios desde el servidor.
- Implementación de un sistema de caché local para mejorar el rendimiento y la experiencia del usuario en caso de conexiones intermitentes o lentas.
- Gestión de errores y manejo de situaciones inesperadas durante la obtención y representación de la interfaz de usuario.
- Obtención de datos desde un servidor remoto utilizando una API REST. *(Por cuestiones de simplicidad a la hora de clonar el repo, los datos se obtienen desde un JSON local pero está todo preparado para que puedan reemplazarlo por un client y realizar peticiones a sus APIs sin mayor complejidad)*


# ¿Qué es SDUI?

Server-Driven UI (SDUI), además la podemos encontrar con estos otros nombres, User Interface as a Service o Backend-Driven Development o tambien Backend-Driven UI, es un enfoque arquitectónico en el que la interfaz de usuario de una aplicación móvil o web se genera y se actualiza dinámicamente desde un servidor remoto. En lugar de tener una interfaz de usuario predefinida y estática en el lado del cliente, SDUI permite que el servidor envíe la estructura y el contenido de la interfaz de usuario al dispositivo del usuario en tiempo real.

En un sistema SDUI, el servidor es responsable de generar y enviar los componentes de la interfaz de usuario, junto con los datos necesarios para poblarlos. El cliente (aplicación móvil o web) recibe estos datos y los renderiza en tiempo de ejecución, adaptando la interfaz de usuario a las necesidades y preferencias del usuario, sin necesidad de actualizar o recompilar la aplicación.

<p align="center" >
   <img align="center"  src="https://github.com/JereSch8/react-native-sdui/assets/58143759/3e1400c5-a0fb-46b7-b2b1-1ebde9682c4d" />
   <p align="center">Esquema de funcionamiento</p>
</p>


# ¿Qué proporciona?

Esto proporciona flexibilidad y escalabilidad a la hora de cambiar o actualizar la interfaz de usuario, ya que los cambios pueden realizarse en el servidor y reflejarse instantáneamente en todos los dispositivos de los usuarios sin requerir actualizaciones de la aplicación. Además, SDUI permite personalizar la interfaz de usuario en función del contexto, como el idioma, la ubicación o el perfil del usuario, lo que brinda una experiencia más adaptada y relevante.


# TIPS para tomar decisiones

Cuando tenemos pantallas que no van a modificarse con frecuencia o que requieren acceder a funciones especiales del sistema / hardware del dispositivo, en estos casos quizás es mejor prescindir del SDUI y optar por un desarrollo estático en el lado del cliente.
Por otro lado, si tenemos restricciones de ancho de banda, es decir, nuestros usuarios se encuentran en áreas con conexiones de red lentas o limitadas, la generación dinámica de UI desde el servidor puede resultar en una experiencia lenta o poco confiable. En estos casos, es posible que una estructura de interfaz de usuario predefinida sea más adecuada.

Un buen indicador de cuándo utilizar SDUI podría ser la interacción, entre menor interacción requiera la pantalla significa que es más adecuado para implementar SDUI y por el lado contrario, una mayor necesidad de interacción podría significar que utilizar SDUI es menos adecuado.

*Dicho esto, el caso de uso típico, es en aquellas pantallas que requieren ser modificadas con bastante frecuencia, por ejemplo, un dashboard o aquellas pantallas que nos interesen para hacer pruebas A/B.*

# Ventajas y Desventajas

| Ventajas  | Desventajas |
| ------------- | ------------- |
| ✔️ Flexibilidad en la interfaz de usuario  | ❌ Mayor dependencia del servidor para la generación de UI  |
| ✔️ Actualizaciones rápidas de la UI	 | ❌ Posible aumento en el uso del ancho de banda |
| ✔️ Personalización basada en el contexto | ❌ Mayor complejidad en la implementación |
| ✔️ Mayor escalabilidad y mantenibilidad	 | ❌ Posibles problemas de rendimiento en la comunicación |
| ✔️ Menor necesidad de actualizaciones de la app | ❌ Posibles problemas de seguridad si no se implementa adecuadamente |
| ✔️ Facilidad para realizar pruebas A/B y cambios | ❌ Requiere una buena gestión de versiones |


# Conceptos a tener en cuenta

***Design System (DS):*** Es un lugar donde se van a mantener todos los componentes visuales y va a funcionar como fuente de verdad, tanto el back-end como el front-end deberán consultar este DS para llevar adelante los desarrollos. Esto es, los componentes que existan en el front-end deben ser los que determina el DS y por el otro lado, los componentes que el back-end puede pedir que sean representados también deben ser los determinados en el DS. En caso que se requiera un nuevo componente, se habla con el equipo de diseño y ellos son los que agregan el componente al DS y actualizan la versión de éste para que tanto el back-end como el front-end puedan incorporar el nuevo componente.
Esto puede ayudar a mantener la coherencia visual, mejorar la eficiencia de desarrollo, facilitar la escalabilidad y el mantenimiento, promover la colaboración y permitir la iteración y mejora continua en el contexto de Server-Driven UI. Juntos, estos enfoques pueden potenciar una experiencia de usuario sólida y consistente en toda la aplicación.

<p align="center" >
   <img align="center"  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1680174955856/7d6434a9-b7a7-49b2-925b-b007c45e75f3.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" />
   <p align="center">Design System</p>
</p>











## Instalación y configuración

1. Clona este repositorio en tu máquina local.
2. Navega hasta el directorio raíz del proyecto.
3. Ejecuta el comando `npm install` para instalar las dependencias.
4. Ejecuta el comando `npm start` para iniciar la aplicación en el emulador o dispositivo configurado.
