import React from "react";
import { Button, ScrollView, Text, View } from "react-native";

import { Components } from "../../domain/models/Components";
import { Avatar } from '../components/Avatar';
import { CustomImage } from "../components/CustomImage";
import { Banner } from "../components/Banner";
import { ItemsCell } from "../components/ItemsCell";
import { TypeComponent } from "../../domain/models/TypeComponent";
import { actionToFunction } from "./actionToFunction";
import { WidgetsData } from "../../domain/models/WidgetsData";
import { Visor } from "../components/Visor";
import { AvatarData } from "../../domain/models/widgets_data/AvatarData";
import { ImageData } from "../../domain/models/widgets_data/ImageData";
import { BannerData } from "../../domain/models/widgets_data/BannerData";
import { CellData } from "../../domain/models/widgets_data/CellData";
import { ButtonData } from "../../domain/models/widgets_data/ButtonData";
import { TitleData } from "../../domain/models/widgets_data/TitleData";
import { VisorData } from "../../domain/models/widgets_data/VisorData";
import { WidgetData } from "../../domain/models/WidgetData";

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
                        case TypeComponent.AVATAR:
                            if (widgetDataWithType === TypeComponent.AVATAR) {
                                widgetComponent = renderAvatar(widgetData.data)
                            }
                            break
                        case TypeComponent.IMAGE:
                            if (widgetDataWithType === TypeComponent.IMAGE) {
                                widgetComponent = renderImage(
                                    widgetData.data,
                                    component.widget?.style
                                )
                            }
                            break
                        case TypeComponent.BANNER:
                            if (widgetDataWithType === TypeComponent.BANNER) {
                                widgetComponent = renderBanner(
                                    widgetData.data,
                                    component.widget?.style
                                )
                            }
                            break
                        case TypeComponent.CELL:
                            if (widgetDataWithType === TypeComponent.CELL) {
                                widgetComponent = renderCell(widgetData.data)
                            }
                            break
                        case TypeComponent.BUTTON:
                            if (widgetDataWithType === TypeComponent.BUTTON) {
                                widgetComponent = renderButton(
                                    widgetData.data,
                                    component.widget?.style
                                )
                            }
                            break
                        case TypeComponent.COLUMN:
                            if (widgetDataWithType === TypeComponent.COLUMN) {
                                const columnComponents = component.widget?.widgets || []
                                const dataWidget = widgetData.data.widgets

                                widgetComponent = renderColumn(
                                    { components: columnComponents },
                                    { widgetsData: dataWidget },
                                    component.widget?.style
                                )
                            }
                            break
                        case TypeComponent.ROW:
                            if (widgetDataWithType === TypeComponent.ROW) {
                                const columnRow = component.widget?.widgets || []
                                const dataWidget = widgetData.data.widgets

                                widgetComponent = renderRow(
                                    { components: columnRow },
                                    { widgetsData: dataWidget },
                                    component.widget?.style
                                )
                            }
                            break
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

const renderAvatar = (data: AvatarData) => {
    const { color, title } = data
    return <Avatar color={color} text={title.toUpperCase()} />
}

const renderImage = (
    data: ImageData,
    styleObj: string | undefined
) => {
    const style = styleObj ? JSON.parse(styleObj) : {};
    return <CustomImage style={style} uri={data.url} />
}

const renderBanner = (
    data: BannerData,
    styleObj: string | undefined
) => {
    const style = styleObj ? JSON.parse(styleObj) : {};
    return <Banner style={style} uri={data.url} />
}

const renderCell = (data: CellData) => {
    const { color, title } = data
    return <ItemsCell color={color} text={title} />
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

const renderColumn = (
    components: Components,
    widgetsData: WidgetsData,
    styleObj: string | undefined
) => {
    const style = styleObj ? JSON.parse(styleObj) : { flex: 1 };

    return (
        <ScrollView style={style} nestedScrollEnabled>
            {widgetComposer(components, widgetsData)}
        </ScrollView>
    )
}

const renderRow = (
    components: Components,
    widgetsData: WidgetsData,
    styleObj: string | undefined
) => {
    const style = styleObj ? JSON.parse(styleObj) : {};
    return (
        <ScrollView
            style={style}
            showsHorizontalScrollIndicator={false}
            horizontal>
            {widgetComposer(components, widgetsData)}
        </ScrollView>
    )
}

const renderTitle = (
    data: TitleData,
    styleObj: string | undefined
) => {
    const style = styleObj ? JSON.parse(styleObj) : {};
    return (
        <Text style={[{ fontSize: 24, textAlign: 'center' }, style]}>
            {data.title}
        </Text>
    )
}

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