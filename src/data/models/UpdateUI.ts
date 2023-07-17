import { Component } from "../../domain/models/Component";
import { WidgetData } from "../../domain/models/WidgetData";

export interface UpdateUI {
    version?: string;
    components: Component[];
    widgetsData: WidgetData[];
}
