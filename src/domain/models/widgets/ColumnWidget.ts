import { Component } from "../Component";
import { TypeComponent } from "../TypeComponent";

export interface ColumnWidget {
    type: TypeComponent.COLUMN;
    widgets: Component[];
    style?: string;
}
