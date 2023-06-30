import { Component } from "../Components";

export interface RowWidget {
    type: 'row';
    widgets: Component[];
}
