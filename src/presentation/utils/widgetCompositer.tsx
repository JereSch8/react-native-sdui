import React from "react";
import { ActivityIndicator, Button, ScrollView, Text } from "react-native";

import { DataComponents } from "../../domain/models/DataComponents";
import { Avatar } from "../components/Avatar";
import { CustomImage } from "../components/CustomImage";
import { Banner } from "../components/Banner";
import { ItemsCell } from "../components/ItemsCell";
import { Components } from "../../domain/models/Components";
import { actionToFunction } from "./actionToFunction";
import { Visor } from "../components/Visor";

export const widgetComposer = (jsonData: DataComponents) => {
    return (
        <>
            {jsonData.components.map((component, _) => {
                let widgetComponent: React.JSX.Element;

                switch (component.widget?.type) {
                    case Components.AVATAR:
                        widgetComponent = (
                            <Avatar
                                key={component.uid}
                                color={component.widget.color}
                                text={component.widget.title.toUpperCase()}
                            />
                        );
                        break;
                    case Components.IMAGE:
                        widgetComponent = (
                            <CustomImage
                                key={component.uid}
                                uri={component.widget.url}
                            />
                        );
                        break;
                    case Components.BANNER:
                        widgetComponent = (
                            <Banner
                                key={component.uid}
                                uri={component.widget.url}
                            />
                        );
                        break;
                    case Components.CELL:
                        widgetComponent = (
                            <ItemsCell
                                key={component.uid}
                                color={component.widget.color}
                                text={component.widget.title}
                            />
                        );
                        break;
                    case Components.BUTTON:
                        const action = component.widget.action;
                        widgetComponent = (
                            <Button
                                key={component.uid}
                                title={component.widget.title}
                                onPress={actionToFunction(action)}
                            />
                        );
                        break;
                    case Components.COLUMN:
                        widgetComponent = (
                            <ScrollView style={{ flex: 1 }} key={component.uid}>
                                {widgetComposer({ components: component.widget.widgets })}
                            </ScrollView>
                        );
                        break;
                    case Components.ROW:
                        widgetComponent = (
                            <ScrollView
                                key={component.uid}
                                showsHorizontalScrollIndicator={false}
                                horizontal
                            >
                                {widgetComposer({ components: component.widget.widgets })}
                            </ScrollView>
                        );
                        break;
                    case Components.TITLE:
                        widgetComponent = (
                            <Text
                                key={component.uid}
                                style={{ fontSize: 24, textAlign: 'center' }}
                            >
                                {component.widget.title}
                            </Text>
                        );
                        break;
                    case Components.VISOR:
                        widgetComponent = (
                            <Visor
                                key={component.uid}
                                currentAmount={component.widget.currentAmount}
                                monthlyAmount={component.widget.monthlyAmount}
                                spentAmount={component.widget.spentAmount}
                            />
                        );
                        break;
                    default:
                        widgetComponent = <ActivityIndicator />;
                        break;
                }
                return widgetComponent;
            })}
        </>
    );
};