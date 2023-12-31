
# Aplicación React Native con Server-Driven UI (SDUI) y Clean Architecture

Este proyecto es un prototipo de una aplicación desarrollada en React Native que implementa la metodología de Server-Driven UI (SDUI). El objetivo principal es demostrar cómo se puede utilizar SDUI para mejorar la eficiencia, flexibilidad y mantenibilidad de una aplicación móvil.

En este prototipo, se implementará un flujo de SDUI en una aplicación React Native. Se utilizarán componentes personalizados y una estructura modular para facilitar la separación de la obtención de datos y la generación de la interfaz de usuario. Se explorarán las prácticas recomendadas para la gestión de estados y la actualización dinámica de la interfaz de usuario en respuesta a los cambios en los datos recibidos desde el servidor.

***NOTA: La explicación acerca de este proyecto es la continuación de [ésta rama](https://github.com/JereSch8/react-native-sdui/tree/sdui-all-in-one#readme) por lo que es recomendable primero entender la idea expuesta en dicha rama y luego regresar aquí y continuar profundizando sobre SDUI, ya que en el link mencionado podran encontrar una guia paso a paso de como comenzar a construir su aplicación utilizando ésta metodologia.***

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


# Detalles de la implementación

Vamos a dividir la explicación en tres ejes principales, los cuales son *Componentes de la UI*, *Datos de la UI* y *Actualización de elementos de la interfaz de usuario*.

## Componentes de la interfaz de usuario (UI)
Los componentes de la interfaz de usuario en React Native para este proyecto en concreto son los siguientes:

- **Avatar:** Componente para mostrar un circulo con un texto en pantalla.
- **Banner:** Componente rectangular para mostrar imágenes.
- **Button:** Componente para agregar botones interactivos.
- **CustomImage:** Componente para mostrar imágenes.
- **ItemCell:** Componente rectangular para mostrar celdas en un ScrollView.
- **Visor:** Componente para mostrar una serie de datos por pantalla.


Estos componentes van hacer enviados por un JSON con la siguiente estructura:

```json
  {
  "version": "1.0.0",
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
    },
    {
      "uid": "HOME_BUTTON",
         "widget": {
         "type": "button"
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


### Como transformar el JSON a un componente de React-Native

Para lograr ésto contamos con una función de transformación, que lo que hace es, dado un ***elemento*** en el **JSON** lo mappeamos a un ***componente*** pre-construido en React-Native.

```typescript
export const widgetComposer = (jsonComponent: Components, jsonData: WidgetsData) => {
    return (
        <>
            {jsonComponent.components.map((component, _) => {
                let widgetComponent: React.JSX.Element = <></>
                let widgetData: WidgetData | undefined

                try {
                    widgetData = jsonData.widgetsData.find(
                        widget => widget.uid === component.uid
                    )
                } catch (e) {
                    console.error(`error: ${e}`);
                    return widgetComponent
                }
                if (widgetData && widgetData.data != undefined) {
                    const widgetType = component.widget?.type
                    const widgetDataWithType = widgetData.data?.type

                    switch (widgetType) {
                        case TypeComponent.BANNER:
                            if (widgetDataWithType === TypeComponent.BANNER) {
                                widgetComponent = renderBanner(
                                    widgetData.data,
                                    component.widget?.style
                                )
                            }
                           break
                        //...
                        case TypeComponent.TITLE:
                            if (widgetDataWithType === TypeComponent.TITLE) {
                                widgetComponent = renderTitle(
                                    widgetData.data,
                                    component.widget?.style)
                            }
                            break
                        case TypeComponent.VISOR:
                            if (widgetDataWithType === TypeComponent.VISOR) {
                                widgetComponent = renderVisor(widgetData.data)
                            }
                            break
                    }
                }
                return <React.Fragment key={component.uid}>{widgetComponent}</React.Fragment>
            })}
        </>
    )
}
```
<a href="https://github.com/JereSch8/react-native-sdui/blob/develop/src/presentation/utils/widgetComposer.tsx" target="_blank">Ver código completo</a>

En ésta sección nos vamos a enfocar especificamente en el `jsonComponents` que es un listado de *componentes* en formato JSON (los que nos vinieron del servidor), para diferenciarlos de los componentes de React-Native le llamaremos **elementos** a estos componentes en formato JSON.

Lo que hacemos en esta función, es, por un lado, transformar el `jsonComponents` (listado de elementos JSON) a un "listado" de componentes de React Native, para lograrlo utilizamos el `map` lo que hacemos dentro es agarrar y consultar por el `type` del *elemento* y asignarle un *componente React Native* correspondiente y luego al final lo integramos a la lista mediante el `<React.Fragment key={component.uid}>{widgetComponent}</React.Fragment>` prestemos especial atención al `key` que le estamos asignando el `uid` del componente, ésto nos va a permitir más adelante cuando hagamos actualizaciones de los componentes, que React Native trabaje de forma muy óptima y eficaz para realizar la recomposicion de los componentes que fueron modificados.


## Datos de la interfaz de usuario (UI)
Los datos de la UI son la información necesaria para poblar los componentes generados previamente por el servidor remoto. Estos datos son enviados por separados de la estructura de los componentes y se utilizan para rellenar de contenido los componentes de la aplicación. Algunos ejemplos de datos de la UI pueden ser:

- Texto y valores para mostrar en los componentes.
- URLs de imágenes para mostrar en los componentes Image.
- Acciones a realizar al presionar un botón en el componente Button.

```json
{
    "widgetsData": [
        {
            "uid": "HOME_VISOR",
            "data": {
                "type": "visor",
                "currentAmount": "$1.000.530,00",
                "monthlyAmount": "$250.000,00",
                "spentAmount": "$200.530,00"
            }
        },
        {
            "uid": "HOME_TITLE",
            "data": {
                "type": "title",
                "title": "Descuentos!"
            }
        },
        {
            "uid": "HOME_BANNER",
            "data": {
                "type": "banner",
                "url": "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
            }
        },
        {
            "uid": "HOME_BUTTON",
            "data": {
                "type": "button",
                "title": "Detalles",
                "action": "GO_TO_DETAILS"
            }
        }
    ]
}
```

Podemos identificar los siguientes `key`:

- `widgetsData`: Es donde se crea la estructura de componentes, es un listado de widgets para ser representados por el cliente y construir la UI.
   - `uid`: Nos sirve para identificar el componente de manera única. Este uid luego es utilizado como `key` en los componentes creados, para así optimizar los procesos de actualizacion.
   - `data`: Nos indica que a continuación vienen los datos del widget que deseamos rellenar en la UI.
      - `type`: Nos sirve para identificar el tipo de widget que deseamos representar en el front-end. (Obligatorio)
        
      - `url`: Es un campo que lo encontramos en las images y los banners, nos proporcina la URL asociada a una imagen.
      - `title`: Es un campo que lo encontramos en los botones, celdas y avatares para definir el texto que se mostrará en él.
      - `action`: Es un campo que lo encontramos en los botones para definir el comportamiento que tendrá el botón al ser presionado (Está asociado a una función pre-programada).
      - `color`: Es un campo que lo encontramos en las celdas y avatares para definir el color del background que tendrá.
      - `currentAmount`: Es un campo que lo encontramos en el visor y nos indica el saldo actual de la cuenta del usuario.
      - `monthlyAmount`: Es un campo que lo encontramos en el visor y nos indica el saldo ingresado éste mes en la cuenta del usuario.
      - `spentAmount`: Es un campo que lo encontramos en el visor y nos indica el saldo gastado éste mes en la cuenta del usuario.

### Como transformar el JSON de datos y poblar los componente de React-Native con estos datos

Para lograr ésto contamos seguimos trabajando sobre la misma función de transformación, que además de hacer lo mencionado arriba tambien se encarga de insertar los datos dentro de nuestros componentes de React-Native.

```typescript
export const widgetComposer = (jsonComponent: Components, jsonData: WidgetsData) => {
    return (
        <>
            {jsonComponent.components.map((component, _) => {
                let widgetComponent: React.JSX.Element = <></>
                let widgetData: WidgetData | undefined

                try {
                    widgetData = jsonData.widgetsData.find(
                        widget => widget.uid === component.uid
                    )
                } catch (e) {
                    console.error(`error: ${e}`);
                    return widgetComponent
                }

                if (widgetData && widgetData.data != undefined) {
                    const widgetType = component.widget?.type
                    const widgetDataWithType = widgetData.data?.type

                    switch (widgetType) {
                        // ...
                        case TypeComponent.BANNER:
                            if (widgetDataWithType === TypeComponent.BANNER) {
                                widgetComponent = renderBanner(
                                    widgetData.data,
                                    component.widget?.style
                                )
                            }
                        case TypeComponent.BUTTON:
                            if (widgetDataWithType === TypeComponent.BUTTON) {
                                widgetComponent = renderButton(
                                    widgetData.data,
                                    component.widget?.style
                                )
                            }
                            break
                        // ...
                        case TypeComponent.VISOR:
                            if (widgetDataWithType === TypeComponent.VISOR) {
                                widgetComponent = renderVisor(widgetData.data)
                            }
                            break
                    }
                }
                return <React.Fragment key={component.uid}>{widgetComponent}</React.Fragment>
            })}
        </>
    )
}

//...

const renderBanner = (
    data: BannerData,
    styleObj: string | undefined
) => {
    const style = styleObj ? JSON.parse(styleObj) : {};
    return <Banner style={style} uri={data.url} />
}

const renderButton = (
    data: ButtonData,
    styleObj: string | undefined
) => {
    const style = styleObj ? JSON.parse(styleObj) : { flex: 1 };
    const { title, action } = data;

    return (
        <View style={style}>
            <Button
                title={title}
                onPress={actionToFunction(action)}
            />
        </View>

    );
};

// ...

const renderVisor = (data: VisorData) => {
    const { currentAmount, monthlyAmount, spentAmount } = data
    return (
        <Visor
            currentAmount={currentAmount}
            monthlyAmount={monthlyAmount}
            spentAmount={spentAmount}
        />
    )
}
```
<a href="https://github.com/JereSch8/react-native-sdui/blob/develop/src/presentation/utils/widgetComposer.tsx" target="_blank">Ver código completo</a>

En ésta sección nos vamos a enfocar especificamente en el `jsonData` que es un listado de *datos* en formato JSON (los que nos vinieron del servidor) para poblar nuestros componentes.

Ahora mirando la misma función y haciendo foco en la parte de la transformación de los datos del JSON, podemos notar una serie de validaciones, lo primero que hacemos es buscar los datos asociados al componente en el cual estamos iterando, esto lo logramos mediante el uso de `find` y chequeando los `uid` tanto del *componente* como del *dato*. una vez que tenemos el dato asociado al componente se lo pasamos como parametro a las funciones `render...(data)` estas tienen como objetivo, dado un componente proporcionarle toda la información necesaria para que pueda ser representado en la UI.

Para el caso puntual del botón que utiliza funciones pre-programadas vemos que además hace uso de la funcion `actionToFunction()`. De lo que se encarga ésta función es mappear la acción a una funcionalidad especifica en el código, la función se ve da la siguiente forma:

```typescript
export function actionToFunction(action: Actions | undefined): () => void {
  switch (action) {
    case Actions.GO_TO_DETAILS:
      return () => {
        console.log("Navigate to Details");
      };
    case Actions.CHANGE_THEME:
      return () => {
        console.log("Change theme");
      };
    case Actions.SET_NAME:
      return () => {
        console.log("Set name");
      };
    default:
      return () => {
        console.log("Acción desconocida");
      };
  }
}
```
<a href="https://github.com/JereSch8/react-native-sdui/blob/develop/src/presentation/utils/actionToFunction.tsx" target="_blank">Ver código completo</a>

## Actualización de los componentes de la interfaz de usuario (UI)
React Native maneja eficientemente la actualización de elementos de la UI utilizando el atributo "key" (identificador único) asignado a cada componente. Cuando se produce un cambio en los datos enviados desde el servidor remoto, React Native compara los "uid" de los componentes existentes con los nuevos "uid" para determinar qué componentes deben actualizarse.

Mediante esta comparación, React Native identifica qué componentes han cambiado y solo realiza las actualizaciones necesarias en la interfaz de usuario, en lugar de volver a renderizar todos los componentes. Esto mejora significativamente el rendimiento de la aplicación y proporciona una experiencia fluida para los usuarios. (Es impresionante lo bien que gestiona esto React-Native)

```json
{
    "version": "1.0.0",
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
                "type": "banner"
            }
        },
        {
            "uid": "HOME_BUTTON",
            "widget": {
                "style": "{\"height\": 0, \"width\": 0}",
                "type": "button"
            }
        }
    ],
    "widgetsData": [
        {
            "uid": "HOME_VISOR",
            "data": {
                "type": "visor",
                "currentAmount": "$760.800.530,00",
                "monthlyAmount": "$1.250.090,00",
                "spentAmount": "$400.530,00"
            }
        },
        {
            "uid": "HOME_TITLE",
            "data": {
                "type": "banner",
                "url": "https://img.freepik.com/fotos-premium/super-oferta-sello-promocional-aislado-superficie-blanca-campana-publicitaria-letras-portugues-brasil_59529-1087.jpg"
            }
        },
        {
            "uid": "HOME_BUTTON",
            "data": {
                "type": "button",
                "title": "Ocultar",
                "action": ""
            }
        }
    ]
}
```

En este JSON, podemos notar que se manda la informacion tanto del componente de UI como el de la data asociada a ese componente esto con el fin de poder redibujar el componente deseado con los nuevos datos. Los JSON que encontramos dentro, son identicos a los mostrados de manera separada arriba en los otros dos ejes. De esta forma podemos modificar/eliminar/agregar nuevos componentes a nuestra UI.

En este caso en concreto con la actualización propuesta en este JSON, lo que estamos logrando es lo siguiente:

- Por un lado, modificar los valores de un componente ya existente que en éste caso en particular es el *Visor*.
- En segundo lugar, mostramos como cambiar enteramente un componente, en este caso concretamente como cambiar un *Text* a un *Banner*.
- Y por último, como ocultar un componente, que lo estamos haciendo con el *Button*.
 

### Como actualizar los componente de React-Native ya renderizados.

Para lograr ésto nos vamos a sumergir en la *capa de datos* y vamos a visualizar el [HomeRepository](https://github.com/JereSch8/react-native-sdui/blob/develop/src/data/repositories/HomeRepository.ts) especificamente la funcion **getUpdateUI()** (En este caso, estamos disparando el evento mediante una función, pero se podria utilizar de otras maneras, por ejemplo, mediante *pushNotifications*)

```typescript
async getUpdateUI(): Promise<WidgetsUpdate> {
        const newUI = await this.homeUIremoteDataSource.getUpdateUI();
        const savedComponents = (await this.homeUIcacheDataSource.getUIFromCache()).components;

        const updatedComponents = this.replaceComponents(newUI.components, savedComponents);
        const updatedData = this.replaceData(newUI.widgetsData, this.tempDataUI.widgetsData);

        return {
            components: { components: updatedComponents },
            widgetsData: { widgetsData: updatedData }
        };
    }
```
<a href="https://github.com/JereSch8/react-native-sdui/blob/develop/src/data/repositories/HomeRepository.ts" target="_blank">Ver código completo</a>

Lo que hacemos aquí, es tomar los datos proveidos por el JSON y extraer la parte de los *jsonComponents* y por otro lado la de *jsonData* para luego con los nuevos datos de componentes actualizar el listado existente, esto lo logramos utilizando la funcion `replaceComponents()` que se ve de la siguiente forma:

```typescript
 private replaceComponents(
        newComponents: Component[],
        components: Component[]
    ): Component[] {
        return components.map(savedComponent => {
            if (savedComponent.widget?.type === TypeComponent.COLUMN
                || savedComponent.widget?.type === TypeComponent.ROW
            ) {
                savedComponent.widget.widgets = this.replaceComponents(newComponents, savedComponent.widget.widgets);
            }
            const matchingComponent = newComponents.find(component => component.uid === savedComponent.uid);

            return (matchingComponent) ? matchingComponent : savedComponent;
        });
    }
```
<a href="https://github.com/JereSch8/react-native-sdui/blob/develop/src/data/repositories/HomeRepository.ts" target="_blank">Ver código completo</a>

En ésta funcion hacemos la mezcla de los componentes actuales guardados en caché y los nuevos componentes proveidos por el servidor, esto lo logramos trabajando con los `uid` de cada componente.

Por otro lado, tambien tenemos la función  `replaceData()` que se ve de la siguiente forma:

```typescript
  private replaceData(
        newData: WidgetData[],
        data: WidgetData[]
    ): WidgetData[] {
        return data.map(savedData => {
            if (savedData.data?.type === TypeComponent.COLUMN
                || savedData.data?.type === TypeComponent.ROW
            ) {
                savedData.data.widgets = this.replaceData(newData, savedData.data.widgets);
            }
            const matchingData = newData.find(data => data.uid === savedData.uid);

            return (matchingData) ? matchingData : savedData
        });
    }
}
```
<a href="https://github.com/JereSch8/react-native-sdui/blob/develop/src/data/repositories/HomeRepository.ts" target="_blank">Ver código completo</a>

En ésta funcion hacemos la mezcla de los datos actuales guardados en una variable temporal `private tempDataUI: WidgetsData` y los nuevos datos proveidos por el servidor, esto también lo logramos trabajando con los `uid` de cada componente.

Luego el resto de magia sucede gracias a la reactividad utilizada en el View-Model con [MobX](https://mobx.js.org/react-integration.html) y a la gran capacidad que tiene react-native para recomponer los componentes que cambiaron en el arbol de widget. Realmente quede impresionado por lo bien que maneja esta recomposicion de manera automágica.

## 

***En los tres ejes vimos recursividad en las funciones, la cual no detallamos por qué sucedia, esto fue para no agregar complejidad a la explicación. Ahora estamos en condiciones de comprender por qué nos encontramos con éstas funciones recursivas. Esto se debe a que existen componentes que dentro de sí poseen otro arbol de componentes, esto lo vemos en componentes como filas (ROW) y columnas (COLUMN), la recursividad la estamos utilizando para poder ingresar dentro de esos componentes y poder representar también lo que tienen dentro.***

## 

## Requisitos previos al despliegue

- Tener [Android Studio](https://developer.android.com/studio) instalado (Si tenes MAC tambien el [Xcode](https://developer.apple.com/xcode/))
- [Node JS >=16](https://nodejs.org/es)


## Instalaciones y configuraciones

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

1. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
  npm install
```

Este comando instalará todas las dependencias necesarias que se encuentran en el archivo `package.json`.

2. Asegúrate de tener las variables de entorno de ANDROID_HOME configuradas en tu sistema.
    - Si no la tenes podes agregar un fichero `local.properties` en la carpeta de `android` generada en el proyecto y hacer la siguiente configuración `sdk.dir=<DIRECCION_DE_TU_SDK_DE_ANDROID>`, ejemplo : `sdk.dir = /home/TU_USER_LINUX/Android/Sdk`
   

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


