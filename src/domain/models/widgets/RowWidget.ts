import { Component } from "../Component";

export interface RowWidget {
    type: 'row';
    widgets: Component[];
}
