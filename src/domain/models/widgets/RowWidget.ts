import { Component } from "../Component";
import { TypeComponent } from "../TypeComponent";

export interface RowWidget {
    type: TypeComponent.ROW;
    widgets: Component[];
    style?: string;
}
