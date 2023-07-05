import { Component } from "../Component";

export interface ColumnWidget {
    type: 'column';
    widgets: Component[];
}
