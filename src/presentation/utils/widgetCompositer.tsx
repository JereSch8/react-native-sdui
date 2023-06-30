import React from "react";
import { ActivityIndicator, Button, ScrollView } from "react-native";

import { DataComponents } from "../../domain/models/DataComponents";
import { Avatar } from "../components/Avatar";
import { CustomImage } from "../components/CustomImage";
import { Banner } from "../components/Banner";
import { ItemsCell } from "../components/ItemsCell";

export const widgetCompositer = (jsonData: DataComponents) => {
    let components: React.JSX.Element[] = []

    jsonData.components.map((component, index) => {
        switch (component.widget?.type) {
            case 'avatar':
                console.log(`Component ${index} => Avatar`);
                components.push(
                    <Avatar
                        color={component.widget.color}
                        text={component.widget.title.toUpperCase()}
                        key={index}
                    />
                )
                break;
            case 'image':
                console.log(`Component ${index} => Image`);
                components.push(
                    <CustomImage
                        uri={component.widget.url}
                        key={index}
                    />
                )
                break;
            case 'banner':
                console.log(`Component ${index} => Banner`);
                components.push(
                    <Banner
                        uri={component.widget.url}
                        key={index}
                    />
                );
                break;
            case 'cell':
                console.log(`Component ${index} => Cell`);
                components.push(
                    <ItemsCell
                        color={component.widget.color}
                        text={component.widget.title}
                        key={index}
                    />
                );
                break;
            case 'button':
                console.log(`Component ${index} => Button`);
                const action = component.widget.action;
                components.push(
                    <Button
                        title={component.widget.action}
                        onPress={() => {
                            console.log(`action: ${action}`);
                        }}
                        key={index}
                    />
                );
                break;
            case 'column':
                console.log(`Component ${index} => Column`);
                components.push(
                    <ScrollView style={{ flex: 1 }} key={index}>
                        {widgetCompositer({ components: component.widget.widgets })}
                    </ScrollView>
                );
                break;
            case 'row':
                console.log(`Component ${index} => Row`);
                components.push(
                    <ScrollView
                        key={index}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                    >
                        {widgetCompositer({ components: component.widget.widgets })}
                    </ScrollView>
                );
                break
            default:
                components.push(<ActivityIndicator key={index} />);
        }
    })

    return (<>{components}</>);
};
