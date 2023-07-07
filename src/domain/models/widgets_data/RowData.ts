import { TypeComponent } from "../TypeComponent";
import { WidgetData } from "../WidgetData";

export interface RowData {
    type: TypeComponent.ROW;
    widgets: WidgetData[];
}
