import { Component } from "../Components";

export interface ColumnWidget {
    type: 'column';
    widgets: Component[];
}
