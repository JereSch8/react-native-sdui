
# Aplicación React Native con Server-Driven UI (SDUI) y Clean Architecture

Este proyecto es un prototipo de una aplicación desarrollada en React Native que implementa la metodología de Server-Driven UI (SDUI). El objetivo principal es demostrar cómo se puede utilizar SDUI para mejorar la eficiencia, flexibilidad y mantenibilidad de una aplicación móvil.

En este prototipo, se implementará un flujo de SDUI en una aplicación React Native. Se utilizarán componentes personalizados y una estructura modular para facilitar la separación de la obtención de datos y la generación de la interfaz de usuario. Se explorarán las prácticas recomendadas para la gestión de estados y la actualización dinámica de la interfaz de usuario en respuesta a los cambios en los datos recibidos desde el servidor.

### Características

- Interpretación y transformación de los datos recibidos en componentes de interfaz de usuario dinámicos.
- Actualización de la interfaz de usuario en tiempo real cuando se reciben nuevos datos o cambios desde el servidor.
- Implementación de un sistema de caché local para mejorar el rendimiento y la experiencia del usuario en caso de conexiones intermitentes o lentas.
- Gestión de errores y manejo de situaciones inesperadas durante la obtención y representación de la interfaz de usuario.
- Obtención de datos desde un servidor remoto utilizando una API REST. *(Por cuestiones de simplicidad a la hora de clonar el repo, los datos se obtienen desde un JSON local pero está todo preparado para que puedan reemplazarlo por un client y realizar peticiones a sus APIs sin mayor complejidad)*


## ¿Qué es SDUI?

Server-Driven UI (SDUI), además la podemos encontrar con estos otros nombres, User Interface as a Service o Backend-Driven Development o tambien Backend-Driven UI, es un enfoque arquitectónico en el que la interfaz de usuario de una aplicación móvil o web se genera y se actualiza dinámicamente desde un servidor remoto. En lugar de tener una interfaz de usuario predefinida y estática en el lado del cliente, SDUI permite que el servidor envíe la estructura y el contenido de la interfaz de usuario al dispositivo del usuario en tiempo real.

En un sistema SDUI, el servidor es responsable de generar y enviar los componentes de la interfaz de usuario, junto con los datos necesarios para poblarlos. El cliente (aplicación móvil o web) recibe estos datos y los renderiza en tiempo de ejecución, adaptando la interfaz de usuario a las necesidades y preferencias del usuario, sin necesidad de actualizar o recompilar la aplicación.

<p align="center" >
   <img align="center"  src="https://github.com/JereSch8/react-native-sdui/assets/58143759/3e1400c5-a0fb-46b7-b2b1-1ebde9682c4d" />
   <p align="center">Esquema de funcionamiento</p>
</p>


## ¿Qué proporciona?

Esto proporciona flexibilidad y escalabilidad a la hora de cambiar o actualizar la interfaz de usuario, ya que los cambios pueden realizarse en el servidor y reflejarse instantáneamente en todos los dispositivos de los usuarios sin requerir actualizaciones de la aplicación. Además, SDUI permite personalizar la interfaz de usuario en función del contexto, como el idioma, la ubicación o el perfil del usuario, lo que brinda una experiencia más adaptada y relevante.


## TIPS para tomar decisiones

Cuando tenemos pantallas que no van a modificarse con frecuencia o que requieren acceder a funciones especiales del sistema / hardware del dispositivo, en estos casos quizás es mejor prescindir del SDUI y optar por un desarrollo estático en el lado del cliente.
Por otro lado, si tenemos restricciones de ancho de banda, es decir, nuestros usuarios se encuentran en áreas con conexiones de red lentas o limitadas, la generación dinámica de UI desde el servidor puede resultar en una experiencia lenta o poco confiable. En estos casos, es posible que una estructura de interfaz de usuario predefinida sea más adecuada.

Un buen indicador de cuándo utilizar SDUI podría ser la interacción, entre menor interacción requiera la pantalla significa que es más adecuado para implementar SDUI y por el lado contrario, una mayor necesidad de interacción podría significar que utilizar SDUI es menos adecuado.

*Dicho esto, el caso de uso típico, es en aquellas pantallas que requieren ser modificadas con bastante frecuencia, por ejemplo, un dashboard o aquellas pantallas que nos interesen para hacer pruebas A/B.*

## Ventajas y Desventajas

| Ventajas  | Desventajas |
| ------------- | ------------- |
| ✔️ Flexibilidad en la interfaz de usuario  | ❌ Mayor dependencia del servidor para la generación de UI  |
| ✔️ Actualizaciones rápidas de la UI	 | ❌ Posible aumento en el uso del ancho de banda |
| ✔️ Personalización basada en el contexto | ❌ Mayor complejidad en la implementación |
| ✔️ Mayor escalabilidad y mantenibilidad	 | ❌ Posibles problemas de rendimiento en la comunicación |
| ✔️ Menor necesidad de actualizaciones de la app | ❌ Posibles problemas de seguridad si no se implementa adecuadamente |
| ✔️ Facilidad para realizar pruebas A/B y cambios | ❌ Requiere una buena gestión de versiones |


## Conceptos a tener en cuenta

***Design System (DS):*** Es un lugar donde se van a mantener todos los componentes visuales y va a funcionar como fuente de verdad, tanto el back-end como el front-end deberán consultar este DS para llevar adelante los desarrollos. Esto es, los componentes que existan en el front-end deben ser los que determina el DS y por el otro lado, los componentes que el back-end puede pedir que sean representados también deben ser los determinados en el DS. En caso que se requiera un nuevo componente, se habla con el equipo de diseño y ellos son los que agregan el componente al DS y actualizan la versión de éste para que tanto el back-end como el front-end puedan incorporar el nuevo componente.

Esto puede ayudar a mantener la coherencia visual, mejorar la eficiencia de desarrollo, facilitar la escalabilidad y el mantenimiento, promover la colaboración y permitir la iteración y mejora continua en el contexto de Server-Driven UI. Juntos, estos enfoques pueden potenciar una experiencia de usuario sólida y consistente en toda la aplicación.

<p align="center" >
   <img align="center"  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1680174955856/7d6434a9-b7a7-49b2-925b-b007c45e75f3.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" />
   <p align="center">Design System</p>
</p>


## Detalles de la implementación

Vamos a dividir la explicación en tres ejes principales, los cuales son *Componentes de la UI*, *Datos de la UI* y *Actualización de elementos de la interfaz de usuario*.

### Componentes de la interfaz de usuario (UI)
Los componentes de la interfaz de usuario en React Native para este proyecto en concreto son los siguientes:

- **Avatar:** Componente para mostrar un circulo con un texto en pantalla.
- **Banner:** Componente rectangular para mostrar imágenes.
- **Button:** Componente para agregar botones interactivos.
- **CustomImage:** Componente para mostrar imágenes.
- **ItemCell:** Componente rectangular para mostrar celdas en un ScrollView.
- **Visor:** Componente para mostrar una serie de datos por pantalla.


Estos componentes van hacer enviados por un JSON con la siguiente estructura:

```bash
  {
  "version": "2.0.0",
  "components": [
    {
      "uid": "HOME_VISOR",
      "widget": {
        "type": "visor"
      }
    },
    {
      "uid": "HOME_TITLE",
      "widget": {
        "style": "{\"fontWeight\": \"bold\", \"fontSize\": 45}",
        "type": "title"
      }
    },
    {
      "uid": "HOME_BANNER",
      "widget": {
        "style": "{\"height\": 285}",
        "type": "banner"
      }
    }
  ]
}
```

Podemos identificar los siguientes `key`:

- `version`: Hace referencia a la versión de la estructura de componentes que vendrá abajo, nos sirve para chequear que tenemos guardada la última versión.

- `components`: Es donde se crea la estructura de componentes, es un listado de widgets para ser representados por el cliente y construir la UI.

   - `uid`: Nos sirve para identificar el componente de manera única. Este uid luego es utilizado como `key` en los componentes creados, para así optimizar los procesos de actualizacion.
   
   - `widget`: Nos indica que a continuación viene la definicion del widget que deseamos representar en la UI.
   
      - `style`: Es un campo **opcional** y nos sirve para setear un estilo adicional al componente. (Recordar, que estos componentes están preconstruidos en el front-end con un su propio style. Este style es complementario y lo que hace es sumar las propiedades que vienen en él, con las ya existentes).
      
      - `type`: Nos sirve para identificar el tipo de widget que deseamos representar en el front-end.


### Datos de la interfaz de usuario (UI)
Los datos de la UI son la información necesaria para poblar los componentes generados previamente por el servidor remoto. Estos datos son enviados por separados de la estructura de los componentes y se utilizan para rellenar de contenido los componentes de la aplicación. Algunos ejemplos de datos de la UI pueden ser:

- Texto para mostrar en los componentes Text.
- URLs de imágenes para mostrar en los componentes Image.
- Acciones a realizar al presionar un botón en el componente Button.

### Actualización de los componentes de la interfaz de usuario (UI)
React Native maneja eficientemente la actualización de elementos de la UI utilizando el atributo "key" (identificador único) asignado a cada componente. Cuando se produce un cambio en los datos enviados desde el servidor remoto, React Native compara los "uid" de los componentes existentes con los nuevos "uid" para determinar qué componentes deben actualizarse.

Mediante esta comparación, React Native identifica qué componentes han cambiado y solo realiza las actualizaciones necesarias en la interfaz de usuario, en lugar de volver a renderizar todos los componentes. Esto mejora significativamente el rendimiento de la aplicación y proporciona una experiencia fluida para los usuarios. (Es impresionante lo bien que gestiona esto React-Native)



## Instalación y configuración

1. Clona este repositorio en tu máquina local.
2. Navega hasta el directorio raíz del proyecto.
3. Ejecuta el comando `npm install` para instalar las dependencias.
4. Ejecuta el comando `npm start` para iniciar la aplicación en el emulador o dispositivo configurado.

## FAQ

### ¿Qué ventajas tiene separar la obtención de *componentes de UI* y de los *datos de UI* en una aplicación?

Separar la obtención de *componentes de la UI* y de los *datos de UI* en una aplicación nos permite mejorar el rendimiento de la aplicación. Al dividir estas dos responsabilidades, podemos optimizar el rendimiento al obtener los datos por un lado, como se haría de manera tradicional, y solicitar la nueva interfaz de usuario en segundo plano. Mientras tanto, se puede mostrar la interfaz de usuario almacenada en caché, lo que garantiza una respuesta rápida y fluida para el usuario. Una vez que llega la nueva vista de la interfaz de usuario, simplemente se muestra y se actualiza la interfaz de usuario almacenada, lo que hace que el cambio sea prácticamente imperceptible en términos de rendimiento para el usuario.

### ¿Cómo definimos el alcance que deben tener las interfaces proveídas por el back-end?

El alcance de las interfaces proveídas por el back-end puede variar dependiendo de las necesidades y restricciones del proyecto. Generalmente, se busca encontrar un equilibrio entre delegar la responsabilidad al back-end para personalizar la apariencia de la interfaz de usuario y mantener cierto grado de control en el desarrollo de la aplicación.

En cuanto a los elementos visuales como tamaños, padding, fuentes y comportamiento del texto, es común permitir que el back-end defina valores personalizados para estos aspectos. Esto significa que el back-end puede proporcionar instrucciones detalladas sobre cómo deben visualizarse los componentes en la aplicación.

Sin embargo, es importante establecer límites claros para evitar la sobredependencia del back-end y garantizar la coherencia en la apariencia de la aplicación. Algunos aspectos clave a considerar son:

1. *Consistencia de la marca:* Es fundamental mantener una identidad visual coherente en toda la aplicación. Se pueden establecer directrices de diseño y limitar la personalización del back-end para asegurarse de que se sigan las pautas establecidas.

2. *Flexibilidad controlada:* Si bien se permite que el back-end defina algunos aspectos visuales, es esencial establecer restricciones claras para evitar cambios drásticos que puedan afectar la usabilidad o la coherencia visual. Establecer límites razonables garantizará que la aplicación mantenga una apariencia profesional y atractiva.

3. *Separación de responsabilidades:* La lógica de negocio y la personalización de la interfaz de usuario deben estar claramente separadas. El back-end puede proporcionar datos y configuraciones, pero la lógica para mostrar y manipular esos datos debe estar en el lado del cliente (front-end). Esto ayuda a mantener un código más organizado y facilita las actualizaciones y modificaciones futuras.

otras preguntas que nos podríamos hacer son, ¿Tendrá aplicaciones multiplataforma? ¿Qué tipo de pruebas A/B querrás hacer? ¿Necesita esta cantidad de control sobre todas sus pantallas? ¿Qué tamaño tendrán sus cargas útiles (payloads)? ¿Tiene un equipo de back-end lo suficientemente grande como para asumir esto?


