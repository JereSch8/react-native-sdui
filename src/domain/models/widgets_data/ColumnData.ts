import { TypeComponent } from "../TypeComponent";
import { WidgetData } from "../WidgetData";

export interface ColumnData {
    type: TypeComponent.COLUMN;
    widgets: WidgetData[];
}
