import { WidgetsData } from "../../domain/models/WidgetsData";

export interface HomeDataremoteDataSourceInterface {
    getWidgetData(): Promise<WidgetsData>
}